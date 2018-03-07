let arrColors = ["#bdbdbd", "#d12020", "#f59126", "#ff85b6", "#56cfcf", "#47962c", "#000000", "#e7e147"];
let fondo = {Blanco: "#bdbdbd", Rojo: "#d12020", Naranja: "#f59126", Rosa: "#ff85b6", Aqua: "#56cfcf", Verde: "#47962c", Negro: "#000000", Amarillo: "#e7e147"};
let arrLetra = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];
function hover(team) {
  team.style.color = arrColors[team.id];
  team.style.background = "white";
  team.style.cursor = 'pointer';
}

function mouseOut(team) {
  team.style.color = arrLetra[team.id];
  team.style.background = arrColors[team.id];
  team.style.cursor = 'pointer';
}

function colorCircles(circles) {
  for (var i = 0; i <  circles; i++) {
    let cir = document.getElementById(i);
    cir.style.background = arrColors[i];
    cir.style.color = arrLetra[i];
    cir.setAttribute('onmouseover', "hover(this)");
    cir.setAttribute('onmouseout', "mouseOut(this)");
  }
}