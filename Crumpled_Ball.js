class Ball extends Base{
    constructor(x,y){
      super(x,y,50,50);
      this.isStatic = false;
      this.image = loadImage("sprites/Paper.png");
    }
  }