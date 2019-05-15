// keyCodes: http://keycode.info/

//Variables
let splash;
var confet = [];
var SceneNum = 0;
var player;
var keyUsed = 0;
var bgColour;


function preload() {
  bgIMG = loadImage('https://i.imgur.com/K4nIOAW.jpg');
}

function setup() {
  createCanvas(550, 400);
  //splash screen
  splash = new Splash();
  //confetti
  for (var i = 0; i < 500; i++) {
    confet[i] = new Confetti();
  }
  player = new Player();
}

function draw() {
  //Menu
  if (SceneNum === 1) {
    aksMenu();
  }
  //Instructions
  else if (SceneNum === 2) {
    aksInstructions();
  }
  //Play Screen1
  else if (SceneNum === 3) {
    aksPlayScreen();
  }
  //About us
  else if (SceneNum === 6) {
    aksAboutUs();
  }
  //Play
  else if (SceneNum === 7) {
    playDev();
  }

  //Settings
  else if (SceneNum === 8) {
    aksSettings();
  }

  //Splash
  else {
    push();
    splash.update();
    splash.show();
    pop();
    if (keyCode === 32 && SceneNum === 0) {
      aksMenu();
    }
  }

  //Cofetti
  // aksCorrect();
  // for (var i = 0; i < 500; i++) {
  //   confet[i].display();
  //   confet[i].update();
  // }
}

function mouseClicked() {
  //Open Instructions from Menu
  if (SceneNum === 1 && mouseX >= 180 && mouseX <= 335 && mouseY >= 255 && mouseY <= 295) {
    aksInstructions();
    SceneNum = 2;
  }
  //Back to Menu from Instructions
  else if (SceneNum === 2 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
    aksMenu();
    SceneNum = 1;
  }
  //Open Play screen from Menu
  else if (SceneNum === 1 && mouseX >= 215 && mouseX <= 385 && mouseY >= 330 && mouseY <= 370) {
    aksPlayScreen();
    SceneNum = 3;
  } else if (SceneNum === 1 && mouseX >= 15 && mouseX <= 135 && mouseY >= 205 - 5 && mouseY <= 235) {
    aksAboutUs();
    SceneNum = 6;
  }
  //Back to Menu from Instructions
  else if (SceneNum === 6 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
    aksMenu();
    SceneNum = 1;
  }

  //Back to Menu from Instructions
  else if (SceneNum === 3 && mouseX >= 200 && mouseX <= 290 && mouseY >= 300 && mouseY <= 350) {
    playDev();
    SceneNum = 7;
    //
  }
  //Open Settings screen from Menu
  else if (SceneNum === 1 && mouseX >= 340 && mouseX <= 500 && mouseY >= 225 - 5 && mouseY <= 270) {
    aksSettings();
    SceneNum = 8;
  }
  //Back to Menu from Instructions
  else if (SceneNum === 8 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
    aksMenu();

    SceneNum = 1;
  }
  //Settings : Rainbow colour  285, 80, 65, 30, 8
  else if (SceneNum === 8 && mouseX >= 280 && mouseX <= 280 + 65 && mouseY >= 80 && mouseY <= 110) {
    bgColour = 1;
  }

  //Settings : noRainbow
  else if (SceneNum === 8 && mouseX >= 385 && mouseX <= 385 + 100 && mouseY >= 80 && mouseY <= 110) {
    bgColour = 0;

  }

  //Settings : Rainbow text
  else if (SceneNum === 8 && mouseX >= 280 && mouseX <= 280 + 65 && mouseY >= 80 && mouseY <= 110) {
    bgColour = 1;
  }

  //Settings : noRainbow text
  else if (SceneNum === 8 && mouseX >= 385 && mouseX <= 385 + 100 && mouseY >= 80 && mouseY <= 110) {
    bgColour = 0;

  }
}

function keyPressed() {
  if (SceneNum === 7  && player.y > height - 21 && player.playerTouch() === false && keyCode === 87 ) {
    player.jump();
  }

  if (SceneNum === 7  && player.playerTouch() === true && keyCode === 87) {
    player.jump();
  }


}
