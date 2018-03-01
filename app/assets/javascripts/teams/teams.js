let arrColors = ["#bdbdbd", "#d12020", "#f59126", "#ff85b6", "#56cfcf", "#47962c", "#000000", "#e7e147"];

function hover(team) {
  let link = document.getElementById("link" + team.id)
  link.style.color = arrColors[team.id];
  team.style.borderColor = arrColors[team.id];
  team.style.background = "white";
  team.style.cursor = 'pointer';
}

function mouseOut(team) {
  let link = document.getElementById("link" + team.id)
  link.style.color = "white";
  team.style.background = arrColors[team.id];
  team.style.cursor = 'pointer';
}

function colorCircles(circles) {
  for (var i = 0; i <  circles; i++) {
    let cir = document.getElementById(i);
    let link = document.getElementById("link" + i)
    cir.style.background = arrColors[i];
    link.style.color = "white";
    cir.setAttribute('onmouseover', "hover(this)");
    cir.setAttribute('onmouseout', "mouseOut(this)");
  }
}