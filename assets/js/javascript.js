document.addEventListener("DOMContentLoaded", function() {
    var botonIrArriba = document.getElementById("botonIrArriba");
  
    window.onscroll = function() {
      mostrarBotonIrArriba();
    };
  
    botonIrArriba.onclick = function() {
      irArriba();
    };
  
    function mostrarBotonIrArriba() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonIrArriba.style.display = "block";
      } else {
        botonIrArriba.style.display = "none";
      }
    }
  
    function irArriba() {
      document.body.scrollTop = 0; // Para Safari
      document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    }
  });
  

  new TypeIt("#miNombre", {
    strings: "Angel Aguilera.",
    speed: 50,
    waitUntilVisible: true,
}).go();
