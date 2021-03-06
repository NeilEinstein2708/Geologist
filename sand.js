class Sand {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density': 1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("brown");
      strokeWeight(3);
      stroke(0);
      ellipse(0,0,this.width,this.height);
      pop();
    }
  };