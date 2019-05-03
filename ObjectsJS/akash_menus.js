function aksMenu() {
  SceneNum = 1;
  background(53, 184, 198);

  //title
  textSize(73);
  fill(255, 255, 255);
  text("Jump", 175, 69);
  text("or", 230, 122);
  textSize(65);
  text("Thump!", 155, 180);


  //Rules
  textSize(30);
  rect(180, 255, 155, 40);
  fill(0, 0, 0);
  text("Instructions", 180, 285);

  //aboutUs
  text("About us", 15, 230);

  //options
  text("Settings", 400, 245);

  //Play button
  textSize(40);
  fill(255, 0, 0);
  text("Play!", 215, 360);
}




function aksInstructions() {
  SceneNum = 1
  background(255)
  
  //How to play
  textSize(50)
  fill(255,0,0)
  text("How to Play",140,50)
  
  //objective
  textSize(35)
  fill(0,0,255)
  text("Objective:",100,95)
  
  textSize(25);
  fill(0,0,0)
  text("Controle your character throght the levels",15,118);
  text("by avoiding obstacles and answering math ",15,138)
  text("questions as you go.",16,158)
  
  
  //rules
  fill(0,0,255)
  textSize(35)
  text("Rules:",100,220)
  
  fill(0,0,0)
  textSize(25)
  text("- Use arrow keys to move",35,245)
  text("- Press 'space bar' to jump",35,270)
  text("- Enter the correct value to aswer the",35,295)
  text("question",35,315)
  
  //backButton
  fill(255)
  rect(30,350,60,30)
  fill(255,0,0)
  text("Back",30,373)

  
}
