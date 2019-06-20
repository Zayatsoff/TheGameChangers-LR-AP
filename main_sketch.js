// keyCodes: http://keycode.info/
function preload() {
  gameLogo = loadImage('https://i.imgur.com/G36MJb4.png');
  bgIMG = loadImage('https://i.imgur.com/K4nIOAW.jpg');
  char1 = loadImage('https://i.imgur.com/tF9LW7z.png');
  char2 = loadImage('https://i.imgur.com/IuWv9Ll.png');
  level1bg = loadImage('https://i.imgur.com/jcSn7hc.jpg');
  level2bg = loadImage('https://i.imgur.com/FgzAsGQ.jpg');
  //10$
  coin1 = loadImage('https://i.imgur.com/953ODrC.png');
  //15$
  coin2 = loadImage('https://i.imgur.com/Ez119et.png');
  //20$
  coin3 = loadImage('https://i.imgur.com/01TBZBQ.png');
  //50$
  coin4 = loadImage('https://i.imgur.com/FAT0qp7.png');
  //100$
  coin5 = loadImage('https://i.imgur.com/2KzYn6t.png');
}
//Variables
let splash;
var confet = [];
var SceneNum = 0;
var player;
var keyUsed = 0;
var bgColour;
var leaf = [];
var numLeaf = 100;
var plat = [];
let OurChar = null;
var coin = [];
var money = 0;



function setup() {
  questions = new Questions();
  createCanvas(550, 400);
  //splash screen
  splash = new Splash();
  //confetti
  for (var i = 0; i < 500; i++) {
    confet[i] = new Confetti();
  }
  player = new Player();
  for (var i = 0; i <= numLeaf; i++) {
    leaf[i] = new Leaf();
  }

  for (var i = 0; i <= 26; i++) {
    plat[i] = new Plat(i);
  }

  for (var i = 0; i <= 10; i++) {
    coin[i] = new Coin();
  }

  player = new Player();
  ground = new Ground();
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
  } else if (SceneNum === 10) {
    playDev2();
  }

  //Settings
  else if (SceneNum === 8) {
    aksSettings();
  }
  // Win screens
  else if (SceneNum === 9) {
    aksLvl1Win();

  } else if (SceneNum === 11) {
    akslvl2Win();
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
  else if (SceneNum === 3 && mouseX >= 200 && mouseX <= 290 && mouseY >= 300 && mouseY <= 400) {
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

  //Settings : Easy
  else if (SceneNum === 8 && mouseX >= 210 && mouseX <= 280 && mouseY >= 175 && mouseY <= 175 + 30) {
    aksMenu();
    SceneNum = 1;
  }

  //Settings : Hard
  else if (SceneNum === 8 && mouseX >= 310 && mouseX <= 440 && mouseY >= 175 && mouseY <= 175 + 30) {
    aksMenu();
    background(255);
    SceneNum = 1;

  }
  // Char select
  else if (SceneNum === 3 && mouseX >= 125 && mouseX <= 205 && mouseY >= 120 && mouseY <= 240) {
    OurChar = char1;
    console.log(OurChar);
  } else if (SceneNum === 3 && mouseX >= 325 && mouseX <= 405 && mouseY >= 120 && mouseY <= 240) {
    OurChar = char2;
  }
  /addition
  if (sceneNum === 1 && mouseX <= 183 && mouseX >= 113 && mouseY >= 200 && mouseY <= 240) {
    Correct()
  } else if (sceneNum === 1 && mouseX <= 325 && mouseX >= 256 && mouseY <= 240 && mouseY > 200) {
    Wrong()
  } else if (sceneNum === 1 && mouseY >= 200 && mouseY <= 240 && mouseX >= 399 && mouseX <= 469) {
    Wrong()
  }

  // subtraction
  else if (sceneNum === 2 && mouseX <= 183 && mouseX >= 113 && mouseY >= 200 && mouseY <= 240) {
    Wrong()
  } else if (sceneNum === 2 && mouseX <= 325 && mouseX >= 256 && mouseY <= 240 && mouseY > 200) {
    Correct()
  } else if (sceneNum === 2 && mouseY >= 200 && mouseY <= 240 && mouseX >= 399 && mouseX <= 469) {
    Wrong()
  }

  // multiplication
  else if (sceneNum === 3 && mouseX <= 183 && mouseX >= 113 && mouseY >= 200 && mouseY <= 240) {
    sceneNum += 3
    Wrong()
  } else if (sceneNum === 3 && mouseX <= 325 && mouseX >= 256 && mouseY <= 240 && mouseY > 200) {
    Wrong()
  } else if (sceneNum === 3 && mouseY >= 200 && mouseY <= 240 && mouseX >= 399 && mouseX <= 469) {
    Correct()
  }

  //exit
  else if (sceneNum === 20 || sceneNum === 21 || sceneNum === 22 && mouseX >= 40 && mouseX <= 120 && mouseY >= 300 && mouseY <= 340) {
    sceneNum = 1;
    aksMenu();
  }


  // From win to next level
  else if (SceneNum === 9 && mouseX >= width / 2 - 30 && mouseX <= (width / 2 - 30) + 70 && mouseY >= 300 && mouseY <= 340) {
    player.y = height - player.h;
    player.x = width / 2;
    playDev2();
    SceneNum = 10;

  }
}

// function keyPressed() {
//   if (SceneNum === 7 && keyCode === 87 && player.jumped === false) {
//     player.jump();
//     player.jumped = true;
//   }
//
//   if (SceneNum === 7 && keyCode === 75 ) {
//     player.y *= 2;
//   }
//
//   if (SceneNum === 7 && player.velocity >= 0) {
//     player.jumped = false;
//   }
// }
