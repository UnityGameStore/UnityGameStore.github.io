<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameStore - Tu Tienda de Videojuegos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #5a67d8;
            --secondary: #e83e8c;
            --dark: #2d3748;
            --light: #f8f9fa;
            --success: #48bb78;
            --ps-color: #003087;
            --xbox-color: #107c10;
            --nintendo-color: #e60012;
            --steam-color: #2a475e;
        }
        
        body {
            background-color: #f8f9fa;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: var(--dark);
        }
        
        /* Header Styles */
        .navbar {
            background: linear-gradient(90deg, var(--ps-color), var(--xbox-color), var(--nintendo-color));
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-brand {
            font-weight: 800;
            font-size: 1.8rem;
            color: white !important;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .hero-section {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 80px 0;
            margin-bottom: 30px;
            border-radius: 0 0 10px 10px;
        }
        
        /* Sidebar Styles */
        .sidebar {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            height: fit-content;
            position: sticky;
            top: 20px;
        }
        
        .sidebar-title {
            font-weight: 700;
            color: var(--primary);
            border-bottom: 2px solid var(--primary);
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        
        .category-item {
            margin-bottom: 10px;
            border-left: 3px solid transparent;
            transition: all 0.3s;
        }
        
        .category-item:hover {
            border-left-color: var(--primary);
            background-color: rgba(90, 103, 216, 0.05);
        }
        
        .category-item a {
            color: var(--dark);
            text-decoration: none;
            font-weight: 500;
            display: block;
            padding: 8px 15px;
            border-radius: 5px;
            transition: all 0.3s;
        }
        
        .category-item a:hover {
            color: var(--primary);
            background-color: rgba(90, 103, 216, 0.1);
        }
        
        .subcategory {
            padding-left: 25px;
            margin-top: 5px;
        }
        
        .subcategory a {
            font-weight: 400;
            font-size: 0.9rem;
            padding: 5px 15px;
        }
        
        .ps-color { color: var(--ps-color); }
        .xbox-color { color: var(--xbox-color); }
        .nintendo-color { color: var(--nintendo-color); }
        .steam-color { color: var(--steam-color); }
        
        /* Product Cards */
        .product-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
            height: 100%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
        }
        
        .product-img {
            height: 200px;
            object-fit: cover;
            border-bottom: 1px solid #eee;
        }
        
        .product-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 0.8rem;
            padding: 5px 10px;
            border-radius: 20px;
        }
        
        .product-title {
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 10px;
            height: 50px;
            overflow: hidden;
        }
        
        .product-price {
            font-weight: 700;
            color: var(--primary);
            font-size: 1.2rem;
        }
        
        .product-old-price {
            text-decoration: line-through;
            color: #718096;
            font-size: 0.9rem;
        }
        
        .btn-add-cart {
            background: var(--primary);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            transition: background 0.3s;
            font-weight: 500;
        }
        
        .btn-add-cart:hover {
            background: var(--secondary);
        }
        
        /* Footer */
        footer {
            background: var(--dark);
            color: white;
            padding: 40px 0 20px;
            margin-top: 50px;
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            transition: background 0.3s;
        }
        
        .social-icon:hover {
            background: var(--primary);
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .sidebar {
                position: static;
                margin-bottom: 30px;
            }
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="fas fa-gamepad me-2"></i>GameStore
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Productos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Ofertas</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
                </ul>
                <div class="d-flex">
                    <div class="input-group me-3">
                        <input type="text" class="form-control" placeholder="Buscar juegos...">
                        <button class="btn btn-light" type="button"><i class="fas fa-search"></i></button>
                    </div>
                    <a href="#" class="btn btn-light position-relative">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container text-center">
            <h1 class="display-4 fw-bold mb-4">Los Mejores Juegos y Membresías</h1>
            <p class="lead mb-4">Encuentra las mejores ofertas en videojuegos, tarjetas de regalo y membresías para todas las plataformas</p>
            <a href="#products" class="btn btn-primary btn-lg px-5 py-3">Ver Ofertas <i class="fas fa-arrow-down ms-2"></i></a>
        </div>
    </section>

    <!-- Main Content -->
    <div class="container mb-5">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-lg-3">
                <div class="sidebar">
                    <h4 class="sidebar-title"><i class="fas fa-list me-2"></i>Categorías</h4>
                    
                    <div class="category-item">
                        <a href="#"><i class="fas fa-tags me-2"></i>OFERTAS</a>
                        <div class="subcategory">
                            <div class="category-item">
                                <a href="#"><i class="fab fa-playstation me-2 ps-color"></i>PLAYSTATION</a>
                            </div>
                            <div class="category-item">
                                <a href="#"><i class="fab fa-xbox me-2 xbox-color"></i>XBOX</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="category-item">
                        <a href="#"><i class="fas fa-crown me-2"></i>MEMBRESIAS</a>
                        <div class="subcategory">
                            <div class="category-item">
                                <a href="#"><i class="fab fa-playstation me-2 ps-color"></i>PLAYSTATION PLUS</a>
                            </div>
                            <div class="category-item">
                                <a href="#"><i class="fab fa-xbox me-2 xbox-color"></i>GAMEPASS</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="category-item">
                        <a href="#"><i class="fas fa-gamepad me-2 nintendo-color"></i>COMBOS NINTENDO SWITCH</a>
                    </div>
                    
                    <div class="category-item">
                        <a href="#"><i class="fas fa-credit-card me-2"></i>TARJETAS</a>
                        <div class="subcategory">
                            <div class="category-item">
                                <a href="#"><i class="fab fa-playstation me-2 ps-color"></i>PLAYSTATION</a>
                            </div>
                            <div class="category-item">
                                <a href="#"><i class="fab fa-xbox me-2 xbox-color"></i>XBOX</a>
                            </div>
                            <div class="category-item">
                                <a href="#"><i class="fas fa-gamepad me-2 nintendo-color"></i>NINTENDO ESHOP</a>
                            </div>
                            <div class="category-item">
                                <a href="#"><i class="fab fa-steam me-2 steam-color"></i>STEAM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Products -->
            <div class="col-lg-9">
                <h2 class="mb-4" id="products">Productos Destacados</h2>
                
                <div class="row">
                    <!-- Product 1 -->
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="product-card">
                            <div class="position-relative">
                                <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" class="product-img w-100" alt="PlayStation 5">
                                <span class="product-badge bg-danger">OFERTA</span>
                            </div>
                            <div class="p-3">
                                <h5 class="product-title">PlayStation 5 - Edición Digital</h5>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span class="product-price">$499.99</span>
                                        <span class="product-old-price ms-2">$549.99</span>
                                    </div>
                                    <span class="ps-color"><i class="fab fa-playstation"></i></span>
                                </div>
                                <button class="btn-add-cart w-100">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Product 2 -->
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="product-card">
                            <div class="position-relative">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" class="product-img w-100" alt="Xbox Series X">
                                <span class="product-badge bg-success">NUEVO</span>
                            </div>
                            <div class="p-3">
                                <h5 class="product-title">Xbox Series X - 1TB</h5>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span class="product-price">$499.99</span>
                                    </div>
                                    <span class="xbox-color"><i class="fab fa-xbox"></i></span>
                                </div>
                                <button class="btn-add-cart w-100">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Product 3 -->
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="product-card">
                            <div class="position-relative">
                                <img src="https://images.unsplash.com/photo-1587844790353-8f08d666a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" class="product-img w-100" alt="Nintendo Switch">
                                <span class="product-badge bg-primary">COMBO</span>
                            </div>
                            <div class="p-3">
                                <h5 class="product-title">Combo Nintendo Switch + Mario Kart</h5>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span class="product-price">$349.99</span>
                                        <span class="product-old-price ms-2">$399.99</span>
                                    </div>
                                    <span class="nintendo-color"><i class="fas fa-gamepad"></i></span>
                                </div>
                                <button class="btn-add-cart w-100">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Product 4 -->
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="product-card">
                            <div class="position-relative">
                                <img src="https://images.unsplash.com/photo-1607853554439-0069ec0f29b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" class="product-img w-100" alt="PlayStation Plus">
                                <span class="product-badge bg-warning text-dark">MEMBRESÍA</span>
                            </div>
                            <div class="p-3">
                                <h5 class="product-title">PlayStation Plus - 12 Meses</h5>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span class="product-price">$59.99</span>
                                    </div>
                                    <span class="ps-color"><i class="fab fa-playstation"></i></span>
                                </div>
                                <button class="btn-add-cart w-100">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Product 5 -->
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="product-card">
                            <div class="position-relative">
                                <img src="https://images.unsplash.com/photo-1611934180043-5d2c4db49a08?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" class="product-img w-100" alt="Xbox Game Pass">
                                <span class="product-badge bg-warning text-dark">MEMBRESÍA</span>
                            </div>
                            <div class="p-3">
                                <h5 class="product-title">Xbox Game Pass Ultimate - 3 Meses</h5>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span class="product-price">$44.99</span>
                                    </div>
                                    <span class="xbox-color"><i class="fab fa-xbox"></i></span>
                                </div>
                                <button class="btn-add-cart w-100">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Product 6 -->
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="product-card">
                            <div class="position-relative">
                                <img src="https://images.unsplash.com/photo-1591932065936-c8d5c0ff8abb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" class="product-img w-100" alt="Tarjeta Steam">
                                <span class="product-badge bg-info">TARJETA</span>
                            </div>
                            <div class="p-3">
                                <h5 class="product-title">Tarjeta de Regalo Steam - $50</h5>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <span class="product-price">$50.00</span>
                                    </div>
                                    <span class="steam-color"><i class="fab fa-steam"></i></span>
                                </div>
                                <button class="btn-add-cart w-100">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <h4 class="mb-4">GameStore</h4>
                    <p>Tu tienda confiable para todos tus necesidades de gaming. Ofrecemos los mejores precios en videojuegos, consolas y membresías.</p>
                    <div class="mt-3">
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-md-2 mb-4">
                    <h5 class="mb-4">Categorías</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-light text-decoration-none">Ofertas</a></li>
                        <li class="mb-2"><a href="#" class="text-light text-decoration-none">Membresías</a></li>
                        <li class="mb-2"><a href="#" class="text-light text-decoration-none">Combos Nintendo</a></li>
                        <li class="mb-2"><a href="#" class="text-light text-decoration-none">Tarjetas</a></li>
                    </ul>
                </div>
                <div class="col-md-2 mb-4">
                    <h5 class="mb-4">Enlaces</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-light text-decoration-none">Sobre Nosotros</a></li>
                        <li class="mb-2"><a href="#" class="text-light text-decoration-none">Contacto</a></li>
                        <li class="mb-2"><a href="#" class="text-light text-decoration-none">Términos y Condiciones</a></li>
                        <li class="mb-2"><a href="#" class="text-light text-decoration-none">Política de Privacidad</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-4">
                    <h5 class="mb-4">Suscríbete a Nuestro Boletín</h5>
                    <p>Recibe las últimas ofertas y novedades directamente en tu correo.</p>
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder="Tu correo electrónico">
                        <button class="btn btn-primary">Suscribirse</button>
                    </div>
                </div>
            </div>
            <hr class="my-4 bg-light">
            <div class="text-center">
                <p class="mb-0">&copy; 2023 GameStore. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
