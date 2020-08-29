class Ground {
    constructor(x,y,w,h) {
      var options = {
          friction:0.5,
          restitution: 0.3,
          isStatic:true,
          density:2.2
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width = w;
      this.height = h;
      World.add(world, this.body);
       }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y,this.width,this.height);
 
    }
  }
  