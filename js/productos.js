/* =========================================================
   INFAME — DATOS Y ESCAPARATE DINÁMICO
   ========================================================= */

const productos = [
    {
        nombre: "Habanero Infernal",
        imagen: "assets/productos/habanero-infernal.png",
        categoria: "LÍNEA PREMIUM",
        caracteristica: "Picante alto",
        descripcion: "Salsa artesanal gourmet con el fuego inconfundible del chile habanero. Ideal para verdaderos amantes del picante.",
        presentacion: "300 ml",
        precio: "Desde $12.000",
        detallePrecio: "Individual $15.000 · 6+ $13.000 · 12+ $12.000"
    },
    {
        nombre: "Ajo Brutal",
        imagen: "assets/productos/ajo-brutal.png",
        categoria: "LÍNEA PREMIUM",
        caracteristica: "Sabor único",
        descripcion: "Salsa espectacular con textura cremosa donde el ajo es el protagonista. Perfecta para carnes y comidas rápidas.",
        presentacion: "300 ml",
        precio: "Desde $9.000",
        detallePrecio: "Individual $12.000 · 6+ $10.000 · 12+ $9.000"
    },
    {
        nombre: "Rosada Artesanal",
        imagen: "assets/productos/rosada-artesanal.png",
        categoria: "LÍNEA CLÁSICA",
        caracteristica: "Sabor artesanal",
        descripcion: "Deliciosa salsa cremosa a base de mayonesa y tomate artesanales. Perfecta para todo tipo de comidas rápidas.",
        presentacion: "300 ml",
        precio: "Desde $9.000",
        detallePrecio: "Individual $12.000 · 6+ $10.000 · 12+ $9.000"
    },
    {
        nombre: "Tomate Artesanal",
        imagen: "assets/productos/tomate-artesanal.png",
        categoria: "LÍNEA CLÁSICA",
        caracteristica: "Sabor artesanal",
        descripcion: "Salsa cremosa a base de tomate y especias naturales. El equilibrio perfecto de sabor para acompañar todo tipo de comidas.",
        presentacion: "300 ml",
        precio: "Desde $9.000",
        detallePrecio: "Individual $12.000 · 6+ $10.000 · 12+ $9.000"
    },
    {
        nombre: "Jalapeño Salvaje",
        imagen: "assets/productos/jalapeno-salvaje.png",
        categoria: "LÍNEA CLÁSICA",
        caracteristica: "Picante medio / bajo",
        descripcion: "Salsa cremosa a base de auténtico jalapeño. El equilibrio perfecto entre sabor y picante, ideal para acompañar todo tipo de comidas.",
        presentacion: "300 ml",
        precio: "Desde $11.000",
        detallePrecio: "Individual $14.000 · 6+ $12.000 · 12+ $11.000"
    },
    {
        nombre: "Habanero Triturado",
        imagen: "assets/productos/habanero-triturado.png",
        categoria: "CONSERVAS Y ESPECIAS",
        caracteristica: "Picante alto",
        descripcion: "Hojuelas secas de chile habanero. Espolvorea directamente sobre tus platillos para un golpe de calor intenso y sabor ahumado.",
        presentacion: "Presentación disponible",
        precio: "$20.000",
        detallePrecio: "Precio individual $20.000"
    },
    {
        nombre: "Red Pepper",
        imagen: "assets/productos/red-pepper.png",
        categoria: "CONSERVAS Y ESPECIAS",
        caracteristica: "Picante medio / alto",
        descripcion: "Pimientos rojos triturados para usar en tus preparaciones o directamente sobre tus platillos para un golpe de calor intenso y sabor ahumado.",
        presentacion: "Presentación disponible",
        precio: "$16.000",
        detallePrecio: "Precio individual $16.000"
    },
    {
        nombre: "Jalapeño en Rodajas",
        imagen: "assets/productos/jalapeno-en-rodajas.png",
        categoria: "CONSERVAS Y ESPECIAS",
        caracteristica: "Picante medio",
        descripcion: "Rodajas de jalapeño fresco encurtido con láminas de ajo y cebolla en julianas. El toque perfecto para convertir cualquier plato en una experiencia.",
        presentacion: "500 g / 250 g",
        precio: "Desde $8.000",
        detallePrecio: "500 g $15.000 · 250 g $8.000"
    },
    {
        nombre: "Pasta de Ají Picante",
        imagen: "assets/productos/pasta-de-aji-picante.png",
        categoria: "CONSERVAS Y ESPECIAS",
        caracteristica: "Picante medio",
        descripcion: "Deliciosa preparación concentrada de chile de árbol y vegetales frescos seleccionados. Ideal para acompañar todo tipo de comida o usar como base en tus preparaciones.",
        presentacion: "500 g / 250 g",
        precio: "Desde $10.000",
        detallePrecio: "500 g $18.000 · 250 g $10.000"
    }
];


/* =========================================================
   ESCAPARATE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const showcase = document.getElementById("showcase");
    const imagen = document.getElementById("producto-imagen");
    const categoria = document.getElementById("producto-categoria");
    const nombre = document.getElementById("producto-nombre");
    const caracteristica = document.getElementById("producto-caracteristica");
    const descripcion = document.getElementById("producto-descripcion");
    const presentacion = document.getElementById("producto-presentacion");
    const precio = document.getElementById("producto-precio");

    const anterior = document.getElementById("anterior-producto");
    const siguiente = document.getElementById("siguiente-producto");

    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    /* =========================================================
       MENÚ MÓVIL
       ========================================================= */

    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", () => {

            const abierto =
                mobileNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(abierto)
            );

            menuToggle.setAttribute(
                "aria-label",
                abierto
                    ? "Cerrar menú"
                    : "Abrir menú"
            );
        });


        mobileNav
            .querySelectorAll("a")
            .forEach((enlace) => {

                enlace.addEventListener("click", () => {

                    mobileNav.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Abrir menú"
                    );
                });

            });
    }
    
    /* ---------------------------------------------------------
       VALIDACIÓN
       --------------------------------------------------------- */

    if (
        !showcase ||
        !imagen ||
        !categoria ||
        !nombre ||
        !caracteristica ||
        !descripcion ||
        !presentacion ||
        !precio ||
        !anterior ||
        !siguiente
    ) {
      return;
    }


    /* ---------------------------------------------------------
       VARIABLES
       --------------------------------------------------------- */

    let productoActual = 0;
    let intervalo = null;
    let presionado = false;
    let toqueParaFlechas = null;


    /* ---------------------------------------------------------
       MOSTRAR PRODUCTO
       --------------------------------------------------------- */

    function mostrarProducto(indice, direccion = "next") {

    const producto = productos[indice];

    if (!producto) {
        return;
    }

    // Identificador para evitar que una carga anterior
    // sobrescriba una selección más reciente.
    const solicitud = ++mostrarProducto.solicitud;

    // Pre-cargar la nueva imagen.
    const nuevaImagen = new Image();

    nuevaImagen.onload = () => {

        // Si mientras cargaba se seleccionó otro producto,
        // ignoramos esta carga anterior.
        if (solicitud !== mostrarProducto.solicitud) {
            return;
        }

        showcase.classList.remove("is-next", "is-prev");

        // Reinicia la animación CSS.
        void showcase.offsetWidth;

        showcase.classList.add(
            direccion === "prev" ? "is-prev" : "is-next"
        );

        // =====================================================
        // CAMBIO SINCRONIZADO
        // La imagen y toda la información cambian juntas.
        // =====================================================

        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        categoria.textContent = producto.categoria;
        nombre.textContent = producto.nombre;
        caracteristica.textContent = producto.caracteristica;
        descripcion.textContent = producto.descripcion;
        presentacion.textContent = producto.presentacion;
        precio.textContent = producto.precio;

        precio.title = producto.detallePrecio;
    };

    nuevaImagen.onerror = () => {

        console.error(
            "INFAME: no se pudo cargar la imagen:",
            producto.imagen
        );

    };

    nuevaImagen.src = producto.imagen;
}

// Contador interno de solicitudes de cambio.
mostrarProducto.solicitud = 0;

    /* ---------------------------------------------------------
       SIGUIENTE PRODUCTO
       --------------------------------------------------------- */

    function siguienteProducto() {

        productoActual =
            (productoActual + 1) % productos.length;

        mostrarProducto(productoActual, "next");
    }


    /* ---------------------------------------------------------
       PRODUCTO ANTERIOR
       --------------------------------------------------------- */

    function anteriorProducto() {

        productoActual =
            (productoActual - 1 + productos.length) %
            productos.length;

        mostrarProducto(productoActual, "prev");
    }


    /* ---------------------------------------------------------
       AUTOPLAY
       --------------------------------------------------------- */

    function pausarAutoplay() {

        clearInterval(intervalo);
        intervalo = null;
    }


    function iniciarAutoplay() {

        clearInterval(intervalo);

        if (!presionado) {

            intervalo = setInterval(() => {
                siguienteProducto();
            }, 5000);

        }
    }


    /* ---------------------------------------------------------
       FLECHA ANTERIOR
       --------------------------------------------------------- */

    anterior.addEventListener("click", (event) => {

        event.stopPropagation();

        anteriorProducto();

        iniciarAutoplay();
    });


    /* ---------------------------------------------------------
       FLECHA SIGUIENTE
       --------------------------------------------------------- */

    siguiente.addEventListener("click", (event) => {

        event.stopPropagation();

        siguienteProducto();

        iniciarAutoplay();
    });


   /* =========================================================
   INTERACCIÓN DEL ESCAPARATE
   ========================================================= */

/* ---------------------------------------------------------
   PAUSAR AL PASAR EL CURSOR
   --------------------------------------------------------- */

showcase.addEventListener("mouseenter", () => {

    presionado = true;

    pausarAutoplay();

});


/* ---------------------------------------------------------
   CONTINUAR AL SACAR EL CURSOR
   --------------------------------------------------------- */

showcase.addEventListener("mouseleave", () => {

    presionado = false;

    iniciarAutoplay();

});


/* ---------------------------------------------------------
   ABRIR FICHA DEL PRODUCTO
   --------------------------------------------------------- */

showcase.addEventListener("click", (event) => {

    // Las flechas tienen su propio comportamiento.
    if (event.target.closest("button")) {
        return;
    }

    const producto = productos[productoActual];

    if (!producto) {
        return;
    }

    const url =
        `producto.html?producto=${encodeURIComponent(producto.nombre)}`;

    window.location.href = url;

});


/* =========================================================
   CONTROLES EN DISPOSITIVOS TÁCTILES
   ========================================================= */

showcase.addEventListener("pointerup", (event) => {

    // Las flechas no necesitan activar los controles.
    if (event.target.closest("button")) {
        return;
    }

    if (
        window.matchMedia("(hover: none)").matches
    ) {

        showcase.classList.add("show-controls");

        clearTimeout(toqueParaFlechas);

        toqueParaFlechas = setTimeout(() => {

            showcase.classList.remove(
                "show-controls"
            );

        }, 1800);

    }

});


    /* =========================================================
       INICIO
       ========================================================= */

    mostrarProducto(productoActual);

    iniciarAutoplay();

});