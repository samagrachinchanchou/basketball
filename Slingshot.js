class Slingshot{
    constructor(bodyA,pointB){

        var options={bodyA:bodyA,
        pointB:pointB,
        length:25,
    stiffness:0.05}

        this.sling=Constraint.create(options)
        World.add(world,this.sling)




    }

    display(){


        if(this.sling.bodyA){
        var posA=this.sling.bodyA.position
        var posB=this.sling.pointB
        stroke("blue")
        line(posA.x,posA.y,posB.x,posB.y)
        }
    }

    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        this.sling.bodyA=body
    }
}