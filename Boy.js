class Boy{
    constructor(x,y){
        this.x=x
        this.y=y
        this.body=Bodies.rectangle(this.x,this.y,30,30)
        World.add(world,this.body)

        this.trajectory=[]
        this.image1=loadImage("smoke.png")
        this.image2=loadImage("smoke2.png")
        this.image3=loadImage("smoke3.png")
        this.image4=loadImage("smoke4.png")
        this.image5=loadImage("smoke5.png")
        this.image6=loadImage("smoke6.png")
        this.visibility=255

       
    }
   
    display(){
        push()


        if (frameCount%3===0 &&  gameState==="offsling" && this.body.velocity.x>0){
        this.trajectory.push([this.body.position.x,this.body.position.y])

        
        }
        for (var i=0;i<this.trajectory.length;i++){
          
            image(random([this.image1,this.image2,this.image3,this.image4,this.image5,this.image6])
            ,this.trajectory[i][0],this.trajectory[i][1])
        }

        fill("orange")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,30,30)
        pop()
    }


}