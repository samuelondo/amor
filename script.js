// Obtener referencias a los elementos HTML
const cajaAmor = document.getElementById("cajaAmor");
const mostrarBoton = document.getElementById("mostrarBoton");
const reclamarBoton = document.getElementById("reclamarBoton");
const nuevoDiv = document.getElementById("nuevoDiv");

// Agregar un evento click al primer botón
mostrarBoton.addEventListener("click", function () {
    // Ocultar la caja de amor y el primer botón
    cajaAmor.style.display = "block";
    mostrarBoton.style.display = "none";

    // Mostrar el segundo botón
    reclamarBoton.style.display = "block";
});

// Agregar un evento click al segundo botón
reclamarBoton.addEventListener("click", function () {
    // Mostrar el segundo texto
    nuevoDiv.style.display = "block";
    reclamarBoton.style.display = "none";
    cajaAmor.style.display = "none";
    // Realizar acciones adicionales al hacer clic en el segundo botón si es necesario
});

 