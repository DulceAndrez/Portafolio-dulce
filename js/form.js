const nombre= document.getElementById("nombre");
const email= document.getElementById("correo");
const celular= document.getElementById("mobile");
const asuntos= document.getElementById("asunto");
const mensajes= document.getElementById("mensaje");
const form=document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nombre.value.length <1 ||nombre.value.trim() =="" ) {
        mostrarMensajeError("nombre", "Nombre no válido*");

    }

    if (email.value.length <1 ||email.value.trim() == "") {
        mostrarMensajeError("correo", "correo no válido*");
     }

     if (celular.value.length <1 ||celular.value.trim() == "") {
        mostrarMensajeError("mobile", "Número no válido*");
     }

});


function mostrarMensajeError(claseInput, mensaje){
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML= mensaje;
}