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

const cards = document.querySelectorAll(".card");
const wrapper = document.querySelector(".cards");

wrapper.addEventListener("mousemove", (event) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--xPos", `${x}px`);
    card.style.setProperty("--yPos", `${y}px`);
  });
});