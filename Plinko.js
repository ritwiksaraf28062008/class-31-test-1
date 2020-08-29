class Plinko {
    constructor(x,y) {
      var options = {
          friction:0.5,
          restitution: 0.3,
          isStatic:true,
          density:2.2
      }
      this.radius = 10;
      this.body = Bodies.circle(x,y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white")
      ellipse(pos.x, pos.y,this.radius,this.radius);
    }
  }
  