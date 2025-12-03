/* ===================== BASE DE DATOS DE EMBARCACIONES (Mock) ===================== */
const yachts = [
    {
        id: 1,
        name: 'Yacht Luxury 1',
        type: 'yate',
        price: 1500,
        capacity: 12,
        length: 45,
        bedrooms: 4,
        bathrooms: 2,
        image: 'img/sunseeker-72-02-1.jpg',
        images: [
            'img/sunseeker-72-02-1.jpg',
            'img/sunseeker-72-10.jpg',
            'img/sunseeker-72-16-1.jpg'
        ],
        description: 'Embarcación de lujo con las mejores comodidades. Perfecta para eventos corporativos y celebraciones privadas. Equipada con sistemas de entretenimiento de última generación.',
        amenities: ['Capitán', 'Catering', 'Entretenimiento', 'WiFi', 'Sistema de sonido premium', 'Jacuzzi', 'Bar completo', 'Piscina'],
        available: true
    },
    {
        id: 2,
        name: 'Yacht Premium',
        type: 'yate',
        price: 1200,
        capacity: 8,
        length: 38,
        bedrooms: 3,
        bathrooms: 2,
        image: 'img/sunseeker-72-07-1.jpg',
        images: [
            'img/sunseeker-72-07-1.jpg',
            'img/sunseeker-72-18-1.jpg',
            'img/sunseeker-72-16-1.jpg'
        ],
        description: 'Elegante embarcación con vistas panorámicas al mar. Ideal para parejas y grupos pequeños. Diseño minimalista con acabados de primera calidad.',
        amenities: ['Capitán', 'WiFi', 'Aire acondicionado', 'Cocina equipada', 'Terraza con jacuzzi', 'Sistema de sonido', 'Minibar'],
        available: true
    },
    {
        id: 3,
        name: 'Yacht Classic',
        type: 'velero',
        price: 800,
        capacity: 6,
        length: 32,
        bedrooms: 2,
        bathrooms: 1,
        image: 'img/sunseeker-72-10.jpg',
        images: [
            'img/sunseeker-72-10.jpg',
            'img/sunseeker-72-16-1.jpg',
            'img/sunseeker-72-18-1.jpg'
        ],
        description: 'Yate clásico perfecto para familias. Seguro y cómodo. Excelente para aprender a navegar con seguridad.',
        amenities: ['Capitán', 'Velas de calidad', 'Cocina', 'Aire acondicionado', 'Camarote confortable'],
        available: true
    },
    {
        id: 4,
        name: 'Catamaran Deluxe',
        type: 'catamarán',
        price: 2000,
        capacity: 15,
        length: 50,
        bedrooms: 5,
        bathrooms: 3,
        image: 'img/lancha-bitcoin-2-cbt1493.jpg',
        images: [
            'img/lancha-caribbeanone-ayh2012.jpg',
            'img/lancha-caribbeanone-b5b2012.jpg',
            'img/lancha-caribbeanone-twz2012.jpg'
        ],
        description: 'Catamarán de lujo para grandes grupos. Estabilidad excepcional y espacio generoso. Ideal para bodas y eventos.',
        amenities: ['Capitán', 'DJ', 'Catering premium', 'Entretenimiento', 'Piscina', 'Bar completo', 'Sistema de cine', 'Jacuzzi doble'],
        available: true
    },
    {
        id: 5,
        name: 'Speedboat Explorer',
        type: 'yate',
        price: 900,
        capacity: 4,
        length: 28,
        bedrooms: 1,
        bathrooms: 1,
        image: 'img/lancha-bitcoin-3-npl1493.jpg',
        images: [
            'img/lancha-leona-6qp1554.jpg',
            'img/lancha-leona-8-ung1554.jpg',
            'img/lancha-leona-xvk1554.jpg'
        ],
        description: 'Embarcación rápida y ágil. Perfecta para aventuras y exploración costera. Moderno y eficiente.',
        amenities: ['Capitán', 'Motor de alta potencia', 'GPS', 'Equipamiento de pesca', 'Bar', 'Entretenimiento'],
        available: true
    },
    {
        id: 6,
        name: 'Mega Yacht Royal',
        type: 'yate',
        price: 3500,
        capacity: 20,
        length: 60,
        bedrooms: 6,
        bathrooms: 4,
        image: 'img/lancha-bitcoin-7-9ls1493.jpg',
        images: [
            'img/lancha-caribbeanone-ysh2012.jpg',
            'img/lancha-bitcoin-4961493.jpg',
            'img/lancha-caribbeanone-ayh2012.jpg'
        ],
        description: 'Mega yate para experiencias VIP. Lujo absoluto con todos los servicios. La mejor opción para celebraciones de ensueño.',
        amenities: ['Capitán', 'Equipo completo', 'Chef privado', 'DJ', 'SPA', 'Cine', 'Helipuerto', 'Helicóptero', 'Todas amenidades premium'],
        available: false
    },
    {
        id: 7,
        name: 'Sailboat Adventure',
        type: 'velero',
        price: 600,
        capacity: 5,
        length: 25,
        bedrooms: 2,
        bathrooms: 1,
        image: 'img/lancha-bitcoin-4961493.jpg',
        images: [
            'img/lancha-leona-6qp1554.jpg',
            'img/lancha-leona-8-ung1554.jpg',
            'img/lancha-leona-xvk1554.jpg'
        ],
        description: 'Velero tradicional con encanto. Experiencia auténtica de navegación. Perfecto para entusiastas de la vela.',
        amenities: ['Capitán', 'Velas tradicionales', 'Camarotes acogedores', 'Cocina', 'Seguridad'],
        available: true
    },
    {
        id: 8,
        name: 'Party Yacht Supreme',
        type: 'catamarán',
        price: 1800,
        capacity: 12,
        length: 42,
        bedrooms: 3,
        bathrooms: 2,
        image: 'img/lancha-caribbeanone-ayh2012.jpg',
        images: [
            'img/lancha-bitcoin-2-cbt1493.jpg',
            'img/lancha-bitcoin-3-npl1493.jpg',
            'img/lancha-bitcoin-7-9ls1493.jpg'
        ],
        description: 'Catamarán especializado en fiestas y celebraciones. Amplias áreas de entretenimiento y servicio profesional.',
        amenities: ['DJ profesional', 'Pista de baile', 'Catering', 'Bar premium', 'Sistema de luces', 'Entretenimiento', 'Capitán'],
        available: true
    },
    {
        id: 9,
        name: 'Family Cruiser',
        type: 'yate',
        price: 950,
        capacity: 7,
        length: 35,
        bedrooms: 3,
        bathrooms: 2,
        image: 'img/lancha-caribbeanone-b5b2012.jpg',
        images: [
            'img/lancha-caribbeanone-twz2012.jpg',
            'img/lancha-caribbeanone-ysh2012.jpg',
            'img/lancha-bitcoin-4961493.jpg'
        ],
        description: 'Diseñado especialmente para familias. Seguro, cómodo y con todas las amenidades necesarias para una vacación perfecta.',
        amenities: ['Capitán', 'Entretenimiento familiar', 'Cocina completa', 'Aire acondicionado', 'Camarotes espaciosos', 'Área de juegos'],
        available: true
    }
];

/* ===================== PÁGINA: SEARCH.HTML ===================== */

// Inicializar página de búsqueda
function initSearchPage() {
    if (document.getElementById('yachtGrid')) {
        displayYachts(yachts);
        setupCapacityRangeDisplay();
    }
}

// Mostrar yates en el grid
function displayYachts(yachtsToDisplay) {
    const yachtGrid = document.getElementById('yachtGrid');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');

    if (yachtsToDisplay.length === 0) {
        yachtGrid.innerHTML = '';
        noResults.classList.remove('d-none');
        resultCount.textContent = '0';
        return;
    }

    noResults.classList.add('d-none');
    resultCount.textContent = yachtsToDisplay.length;

    yachtGrid.innerHTML = yachtsToDisplay.map(yacht => `
        <div class="col-md-6 col-lg-4">
            <div class="card yacht-card h-100 shadow">
                <div class="position-relative overflow-hidden">
                    <img src="${yacht.image}" class="card-img-top" alt="${yacht.name}">
                    ${!yacht.available ? '<span class="badge bg-danger position-absolute top-0 start-0 m-3">NO DISPONIBLE</span>' : '<span class="badge bg-info position-absolute top-0 start-0 m-3">DISPONIBLE</span>'}
                </div>
                <div class="card-body">
                    <h5 class="card-title text-primary">${yacht.name}</h5>
                    <p class="card-text text-muted">
                        <small><strong>Tipo:</strong> ${yacht.type.charAt(0).toUpperCase() + yacht.type.slice(1)}</small><br>
                        <small><strong>Capacidad:</strong> ${yacht.capacity} personas</small>
                    </p>
                    <div class="specs mb-3">
                        <span class="badge bg-info me-2"><i class="fas fa-ruler"></i> ${yacht.length} mts</span>
                        <span class="badge bg-info"><i class="fas fa-users"></i> ${yacht.capacity} pax</span>
                    </div>
                    <h4 class="text-primary">$${yacht.price} <small class="text-muted">/día</small></h4>
                </div>
                <div class="card-footer bg-white border-top">
                    <a href="detail.html?id=${yacht.id}" class="btn btn-primary w-100 btn-sm">Ver Detalles</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Aplicar filtros
function applyFilters() {
    const selectedTypes = Array.from(document.querySelectorAll('.filter-checkbox:checked'))
        .filter(cb => ['type1', 'type2', 'type3'].includes(cb.id))
        .map(cb => cb.value);

    const capacity = parseInt(document.getElementById('capacityRange').value);
    const priceMin = parseInt(document.getElementById('priceMin').value) || 0;
    const priceMax = parseInt(document.getElementById('priceMax').value) || 5000;

    const selectedServices = Array.from(document.querySelectorAll('.filter-checkbox:checked'))
        .filter(cb => ['service1', 'service2', 'service3'].includes(cb.id))
        .map(cb => cb.value);

    let filtered = yachts.filter(yacht => {
        // Filtro de tipo
        if (selectedTypes.length > 0 && !selectedTypes.includes(yacht.type)) {
            return false;
        }

        // Filtro de capacidad
        if (yacht.capacity < capacity) {
            return false;
        }

        // Filtro de precio
        if (yacht.price < priceMin || yacht.price > priceMax) {
            return false;
        }

        // Filtro de servicios
        if (selectedServices.length > 0) {
            const hasAllServices = selectedServices.every(service => {
                return yacht.amenities.some(amenity => 
                    amenity.toLowerCase().includes(service.toLowerCase())
                );
            });
            if (!hasAllServices) {
                return false;
            }
        }

        return true;
    });

    displayYachts(filtered);
}

// Limpiar filtros
function resetFilters() {
    document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
    document.getElementById('capacityRange').value = 20;
    document.getElementById('priceMin').value = 0;
    document.getElementById('priceMax').value = 5000;
    document.getElementById('capacityValue').textContent = 20;
    displayYachts(yachts);
}

// Mostrar valor del rango de capacidad
function setupCapacityRangeDisplay() {
    const capacityRange = document.getElementById('capacityRange');
    const capacityValue = document.getElementById('capacityValue');
    
    if (capacityRange) {
        capacityRange.addEventListener('input', function() {
            capacityValue.textContent = this.value;
        });
    }
}

// Aplicar ordenamiento
function applySort() {
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect.value;
    let sorted = [...yachts];

    switch(sortValue) {
        case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'capacity-asc':
            sorted.sort((a, b) => a.capacity - b.capacity);
            break;
    }

    displayYachts(sorted);
}

/* ===================== PÁGINA: DETAIL.HTML ===================== */

// Inicializar página de detalles
function initDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const yachtId = parseInt(urlParams.get('id')) || 1;
    
    const yacht = yachts.find(y => y.id === yachtId);
    
    if (yacht) {
        displayYachtDetail(yacht);
        displaySimilarYachts(yacht);
    }
}

// Mostrar detalles del yate
function displayYachtDetail(yacht) {
    // Actualizar breadcrumb
    document.getElementById('breadcrumbName').textContent = yacht.name;

    // Actualizar información básica
    document.getElementById('yachtName').textContent = yacht.name;
    document.getElementById('yachtPrice').textContent = `$${yacht.price}`;
    document.getElementById('yachtLength').textContent = yacht.length;
    document.getElementById('yachtCapacity').textContent = yacht.capacity;
    document.getElementById('yachtBedrooms').textContent = yacht.bedrooms;
    document.getElementById('yachtBathrooms').textContent = yacht.bathrooms;
    document.getElementById('yachtDescription').textContent = yacht.description;

    // Disponibilidad
    const availabilityBadge = document.getElementById('availability');
    if (yacht.available) {
        availabilityBadge.textContent = 'Disponible';
        availabilityBadge.className = 'badge bg-success';
    } else {
        availabilityBadge.textContent = 'No Disponible';
        availabilityBadge.className = 'badge bg-danger';
    }

    // Carrusel de imágenes
    const carouselIndicators = document.getElementById('carouselIndicators');
    const carouselImages = document.getElementById('carouselImages');
    
    carouselIndicators.innerHTML = yacht.images.map((img, index) => `
        <button type="button" data-bs-target="#yachtCarousel" data-bs-slide-to="${index}" 
                class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}"></button>
    `).join('');

    carouselImages.innerHTML = yacht.images.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100" alt="Imagen ${index + 1}">
        </div>
    `).join('');

    // Amenidades
    const amenitiesList = document.getElementById('amenitiesList');
    amenitiesList.innerHTML = yacht.amenities.map(amenity => `
        <div class="col-6 col-md-6">
            <div class="d-flex align-items-center mb-3">
                <i class="fas fa-check-circle text-success me-2"></i>
                <span>${amenity}</span>
            </div>
        </div>
    `).join('');

    // Configurar cálculo de precio
    setupPriceCalculation(yacht.price);
}

// Mostrar yates similares
function displaySimilarYachts(currentYacht) {
    const similar = yachts
        .filter(y => y.id !== currentYacht.id && y.type === currentYacht.type)
        .slice(0, 3);

    const similarYachtsDiv = document.getElementById('similarYachts');
    similarYachtsDiv.innerHTML = similar.map(yacht => `
        <div class="mb-3 pb-3 border-bottom">
            <div class="row g-2">
                <div class="col-4">
                    <img src="${yacht.image}" class="img-fluid rounded" alt="${yacht.name}" style="cursor: pointer;" 
                         onclick="window.location.href='detail.html?id=${yacht.id}'">
                </div>
                <div class="col-8">
                    <h6>${yacht.name}</h6>
                    <small class="text-muted">$${yacht.price}/día</small><br>
                    <small><i class="fas fa-users"></i> ${yacht.capacity} pax</small><br>
                    <a href="detail.html?id=${yacht.id}" class="btn btn-sm btn-outline-primary mt-2">Ver</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Configurar cálculo de precio
function setupPriceCalculation(basePrice) {
    const bookingDays = document.getElementById('bookingDays');
    const subtotalEl = document.getElementById('subtotal');
    const totalPriceEl = document.getElementById('totalPrice');

    function calculateTotal() {
        const days = parseInt(bookingDays.value) || 1;
        const subtotal = basePrice * days;
        const services = 100; // Servicios adicionales fijos
        const total = subtotal + services;

        subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
        document.getElementById('services').textContent = `$${services}`;
        totalPriceEl.textContent = `$${total.toLocaleString()}`;
    }

    if (bookingDays) {
        bookingDays.addEventListener('change', calculateTotal);
    }
}

// Continuar con reserva
function proceedToCheckout() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm.checkValidity() === false) {
        bookingForm.classList.add('was-validated');
        return;
    }
    alert('Demo: Procesos de pago integrados con Stripe/PayPal en producción');
}

// Contactar directamente
function contactUs() {
    alert('Te contactaremos pronto en tu email y teléfono registrado');
}

/* ===================== PÁGINA: INDEX.HTML ===================== */

// Ir a búsqueda con parámetros
function goToSearch() {
    const searchType = document.getElementById('searchType').value;
    const searchDate = document.getElementById('searchDate').value;
    const searchDays = document.getElementById('searchDays').value;

    let url = 'search.html?';
    if (searchType) url += `type=${encodeURIComponent(searchType)}&`;
    if (searchDate) url += `date=${encodeURIComponent(searchDate)}&`;
    if (searchDays) url += `days=${encodeURIComponent(searchDays)}&`;

    window.location.href = url;
}

/* ===================== INICIALIZACIÓN ===================== */

// Detectar qué página se está cargando e inicializar
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'search.html' || currentPage === '') {
        initSearchPage();
    } else if (currentPage === 'detail.html') {
        initDetailPage();
    }

    // Smooth scrolling para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Validación de formulario de contacto
    const contactForm = document.querySelector('form');
    if (contactForm && contactForm.id === undefined) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
            this.reset();
        });
    }
});

// Log de inicialización
console.log('Ocean Drive - Sistema de Rentas de Yates');
console.log('Versión Frontend 1.0');
