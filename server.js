import express from "express";
import mysql from "mysql2";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "David12345&", 
  database: "ocean_drive"
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;

  
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, results) => {
      if (err) return res.json({ status: "error", message: err });

      if (results.length === 0) {
        return res.json({ status: "error", message: "Correo no registrado" });
      }

      const user = results[0];

     
      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        return res.json({ status: "error", message: "Contraseña incorrecta" });
      }

      
      res.json({
        status: "success",
        message: "Login exitoso",
        user: {
          id: user.id,
          name: user.firstName,
          email: user.email,
          accountType: user.accountType
        }
      });
    }
  );
});



app.post("/register", (req, res) => {
  const { firstName, lastName, email, phone, password, accountType } = req.body;

  
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, results) => {
      if (results.length > 0) {
        return res.json({ status: "error", message: "El correo ya está registrado." });
      }

      
      const hashedPass = bcrypt.hashSync(password, 10);

      
      db.query(
        "INSERT INTO users (firstName, lastName, email, phone, password, accountType) VALUES (?, ?, ?, ?, ?, ?)",
        [firstName, lastName, email, phone, hashedPass, accountType],
        (err, result) => {
          if (err) return res.json({ status: "error", message: err });

          res.json({ status: "success", message: "Usuario registrado correctamente" });
        }
      );
    }
  );
});

app.post("/reservas", (req, res) => {
  const { user_id, fecha_inicio, dias, huespedes, total } = req.body;

  if (!user_id || !fecha_inicio || !dias || !huespedes || !total) {
    return res.json({ status: "error", message: "Faltan datos en la reserva" });
  }

  const sql =
    "INSERT INTO reservas (user_id, fecha_inicio, dias, huespedes, total) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [user_id, fecha_inicio, dias, huespedes, total], (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ status: "error", message: "Error al guardar reserva" });
    }

    res.json({
      status: "success",
      message: "Reserva creada correctamente",
      reservaId: result.insertId,
    });
  });
});



app.listen(3001, () => console.log("Servidor corriendo en http://localhost:3001"));
