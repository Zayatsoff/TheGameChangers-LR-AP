function aksMenu() {
background(53, 184, 198);

  //title
  textSize(73);
  fill(255,255,255);
  text("Jump",175,69);
  text("or",230,122)
  textSize(65);
  text("Thump!",155,180);


  //Rules
  textSize(30)
  text("Instructions",180,285)
  rect(180,255,155,40)

  //aboutUs
  text("About us",15,230)

  //options
  text("Settings",400,245)

  //Play button
  textSize(40)
  fill(255,0,0)
  text("Play!",215, 360);


}




function aksInstructions() {
  background(255)

  //How to play
  textSize(40);
  fill(255, 0, 0);
  text("How to Play", 150, 50);

  //objective
  textSize(25);
  fill(0, 0, 255);
  text("Objective:", 30, 85);

  textSize(20);
  fill(0, 0, 0);
  text("Controle your character throght the levels", 15, 108);
  text("by avoiding obstacles and answering math ", 15, 128);
  text("questions as you go.", 16, 148);



  //rules
  fill(0, 0, 255);
  textSize(25);
  text("Rules:", 30, 200);

  fill(0, 0, 0);
  textSize(20);
  text("- Use arrow keys to move", 15, 225);
  text("- Press 'space bar' to jump", 15, 245);
  text("- Enter the correct value to aswer the", 15, 265);
  text("question", 15, 285);

}
