let fondo = {'Blanco': "#bdbdbd", 'Rojo': "#d12020", 'Naranja': "#f59126", 'Rosa': "#ff85b6", 'Aqua': "#56cfcf", 'Verde': "#47962c", 'Negro': "#000000", 'Amarillo': "#e7e147"};

function hover(team) {
  let link = document.getElementById("link" + team.id)
  let col = link.textContent.replace(/[\n\r]+|[\s]{2,}/g, '');
  link.style.color = fondo[col];
  team.style.borderColor = fondo[col];
  team.style.background = "white";
  team.style.cursor = 'pointer';
}

function mouseOut(team) {
  let link = document.getElementById("link" + team.id)
  let col = link.textContent.replace(/[\n\r]+|[\s]{2,}/g, '');
  link.style.color = "white";
  team.style.background = fondo[col];
  team.style.cursor = 'pointer';
}

function colorCircles(circles) {
  for (var i = 0; i <  circles; i++) {
    let cir = document.getElementById(i);
    let link = document.getElementById("link" + i)
    let col = link.textContent.replace(/[\n\r]+|[\s]{2,}/g, '');
    cir.style.background = fondo[col];
    link.style.color = "white";
    cir.setAttribute('onmouseover', "hover(this)");
    cir.setAttribute('onmouseout', "mouseOut(this)");
  }
}

function colorInfo(name) {
  let cir = document.getElementById("info");
  cir.style.color = fondo[name];
}