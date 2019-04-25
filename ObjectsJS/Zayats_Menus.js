function splash() {
  background(220, 244, 240);

  this.x = width /2;
  this.y = height/2;
  /// Main_Text
  textSize(70);
  //textFont(edunline);
  fill(0);
  textAlign(CENTER);
  text('GameName!', this.x ,this.y);
  ///

   this.update = function() {
    this.x++;
    this.y++;

  }

}
