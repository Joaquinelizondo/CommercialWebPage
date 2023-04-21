let cerrar = document.querySelectorAll(".close")[0];
let abrirL = document.querySelectorAll(".boton__blanco__nav")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrirL.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.toggle("modal-close");
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
});

cerrar.addEventListener("click", (e) => {
  modal.classList.toggle("modal-close");
  setTimeout(function () {
    modalC.style.visibility = "hidden";
    modalC.style.opacity = "0";
  }, 900);
});

/*--------------pruebas form------------*/
