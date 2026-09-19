/* =========================================================
   INFAME — FICHA DE PRODUCTO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const imagen = document.getElementById("detalle-imagen");
    const categoria = document.getElementById("detalle-categoria");
    const nombre = document.getElementById("detalle-nombre");
    const caracteristica = document.getElementById("detalle-caracteristica");
    const descripcion = document.getElementById("detalle-descripcion");
    const presentacion = document.getElementById("detalle-presentacion");
    const precio = document.getElementById("detalle-precio");

    if (
        !imagen ||
        !categoria ||
        !nombre ||
        !caracteristica ||
        !descripcion ||
        !presentacion ||
        !precio
    ) {
        console.error("INFAME: faltan elementos de la ficha de producto.");
        return;
    }

    const parametros = new URLSearchParams(window.location.search);
    const productoSolicitado = parametros.get("producto");

    if (!productoSolicitado) {
        console.error("INFAME: no se recibió ningún producto.");
        return;
    }

    const producto = productos.find(
        item => item.nombre === productoSolicitado
    );

    if (!producto) {
        console.error(
            "INFAME: producto no encontrado:",
            productoSolicitado
        );
        return;
    }

    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    categoria.textContent = producto.categoria;
    nombre.textContent = producto.nombre;
    caracteristica.textContent = producto.caracteristica;
    descripcion.textContent = producto.descripcion;
    presentacion.textContent = producto.presentacion;
    precio.textContent = producto.precio;

    document.title = `${producto.nombre} | INFAME Soluciones Culinarias`;
});