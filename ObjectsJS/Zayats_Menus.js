class Splash {

  constructor(){
    this.x=width/2;
    this.y=height/2;
    this.size=40;
    this.GO_UP = 1;
  }

  show(){
  background(220, 244, 240);

 //this.x = width /2;
  //this.y = height/2;
  /// Main_Text
  textSize(this.size);
  //textFont(edunline);
  fill(0);
  textAlign(CENTER);
  text('GameName!', this.x ,this.y);

}
   update(){
     this.size += this.GO_UP;
     if (this.size < 40 || this.size > 70) {
       this.GO_UP*=-1;

     }



  }

}
