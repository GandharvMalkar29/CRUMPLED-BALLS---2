class Dustbin {
    constructor(x,y,width,height){
       var option = {
         isStatic:true
       } 

       this.bottom = Bodies.rectangle(580,640,180,10,option);
       this.left = Bodies.rectangle(490,585,10,100,option);
       this.right = Bodies.rectangle(670,585,10,100,option);
       this.image = loadImage("CP-2-master/dustbingreen.png")
       World.add(world,this.bottom)
       World.add(world,this.left)
       World.add(world,this.right)

    }
    display(){
        fill("white")
        rectMode(CENTER);
        push()
        translate(this.bottom.position.x,this.bottom.position.y-90)
        //console.log("hello..")
        imageMode(CENTER)
        image(this.image,0,0,180,200)
        pop();
        
    }
}
