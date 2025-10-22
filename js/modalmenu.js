// Obtener los elementos
var modalA = document.getElementById("myModalAutoridades");
var btnA = document.getElementById("openModalAutoridades");
var spanA = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el enlace, abre el modal
btnA.onclick = function() {
  modalA.style.display = "block";
}

// Cuando el usuario hace clic en la 'x', cierra el modal
spanA.onclick = function() {
  modalA.style.display = "none";
}

// Cuando el usuario hace clic fuera del contenido del modal, lo cierra
window.onclick = function(event) {
  if (event.target == modalA) {
    modalA.style.display = "none";
  }
}
//-------------------------------------------------------------------
// Obtener los elementos
var modalO = document.getElementById("myModalOrganigrama");
var btnO= document.getElementById("openModalOrganigrama");
var spanO = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el enlace, abre el modal
btnO.onclick = function() {
  modalO.style.display = "block";
}

// Cuando el usuario hace clic en la 'x', cierra el modal
spanO.onclick = function() {
  modalO.style.display = "none";
}

// Cuando el usuario hace clic fuera del contenido del modal, lo cierra
window.onclick = function(event) {
  if (event.target == modalO) {
    modalO.style.display = "none";
  }
}
//-----------------------------------------------------------------
// Obtener los elementos
var modalS = document.getElementById("myModalSobreNosotros");
var btnS = document.getElementById("openModalSobreNosotros");
var spanS = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el enlace, abre el modal
btnS.onclick = function() {
  modalS.style.display = "block";
}

// Cuando el usuario hace clic en la 'x', cierra el modal
spanS.onclick = function() {
  modalS.style.display = "none";
}

// Cuando el usuario hace clic fuera del contenido del modal, lo cierra
window.onclick = function(event) {
  if (event.target == modalS) {
    modalS.style.display = "none";
  }
}
//-----------------------------------------------------------------------
// Obtener los elementos
var modalC = document.getElementById("myModalContactos");
var btnC = document.getElementById("openModalContactos");
var spanC = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el enlace, abre el modal
btnC.onclick = function() {
  modalC.style.display = "block";
}

// Cuando el usuario hace clic en la 'x', cierra el modal
spanC.onclick = function() {
  modalC.style.display = "none";
}

// Cuando el usuario hace clic fuera del contenido del modal, lo cierra
window.onclick = function(event) {
  if (event.target == modalC) {
    modalC.style.display = "none";
  }
}