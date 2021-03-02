class Ball{
     constructor(x,y){
        this.ball = Bodies.circle(x, y, 20, {isStatic:false});
        World.add(world,this.ball);
         this.image = loadImage("CP-2-master/paper.png")
     }
     display(){
        fill("white")
        rectMode(CENTER);
        push()
        translate(this.ball.position.x,this.ball.position.y-90)
        //console.log("hello..")
        imageMode(CENTER)
        image(this.image,0,0,40,40)
        pop();
        
    }

 }
