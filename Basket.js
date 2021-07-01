class Basket{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
    
        var options={
            isStatic:true,
            friction:1,
            density:25,
            mass:20
        
    
        }
    
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    
    
    
    
    
    }
    
    display(){
        push()
        fill("yellow")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,this.width,this.height)
        pop()
    }  
}
    