class Stand{

    constructor(x, y, width, height) {
    
    I var options = {
    
    isStatic:true
    
    } this.body= Bodies.rectangle(x, y, width, height, options);
    
    this.width = width;
    
    this.height = height;
    
    World.add(world, this.body);
    
    }
    
    display(){
    
    var angle = this.body.angle; strokeWeight (2); translate(this.body.position.x, this.body.position.y); rectMode(CENTER);
    
    fill("white");
    
    push();
    
    rotate(angle);
    
    rect(0,0,this.width, this.height);
     pop();
    
    }
    
    }