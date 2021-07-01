class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.x=x
        this.y=y

        this.body=Bodies.rectangle(this.x,this.y,800,30,options)
        World.add(world,this.body)
    }
    display(){
        push()
        fill("brown")
        rect(this.body.position.x,this.body.position.y,800,30)
        pop()
    }
}