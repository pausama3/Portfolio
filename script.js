function mostrarSeccion(seccionId, elemento) {
    // 1. Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('active');
    });

    // 2. Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(seccionId);
    if (seccionActiva) {
        seccionActiva.classList.add('active');
    }

    // 3. Quitar clase active de todos los botones
    const botones = document.querySelectorAll('.cabecera button');
    botones.forEach(boton => {
        boton.classList.remove('active');
    });

    // 4. Añadir clase active al botón pulsado
    if (elemento) {
        elemento.classList.add('active');
    }
}