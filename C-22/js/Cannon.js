class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonimage=loadImage("assets/canon.png");
    this.cannonbase=loadImage("assets/cannonBase.png");
  }
 display(){
   push();
   translate(this.x,this.y);
   rotate(this.angle);
   imageMode(CENTER);
   image(this.cannonimage,0,0,this.width,this.height,);
   pop();
   image(this.cannonbase,70,20,200,200);
 } 
}

