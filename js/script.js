window.addEventListener('DOMContentLoaded', (event) => {
  var fechaHora = new Date();
  var hora = fechaHora.getHours();
  var saludo = "";

  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  var saludoElement = document.getElementById("saludo");
  saludoElement.textContent = saludo;

  var horaElement = document.getElementById("hora");
  horaElement.textContent = fechaHora.toLocaleTimeString();
});

$(document).ready(function(){
  $('.slider1').bxSlider({
    mode: 'fade',
  });
});
