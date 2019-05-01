function Switch(id, slide1) {
  if (keyCode === id) {
    slide1();

  }

}

function SwitchClick(x1, x2, y1, y2, cod) {

  if (mouseX <= x2 && mouseX >= x1 && mouseY <= y2 && mouseY >= y1) {
    overBox = 1;
    console.log("find");


  }

}
