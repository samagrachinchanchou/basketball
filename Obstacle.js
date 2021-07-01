class Obstacle{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        var options={
            isStatic:false,
            mass:5,
            density:5
        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)

    }

    display(){
        push()

        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,this.width,this.height)
        fill(this.body.position.x/4)
        pop()
    }
}