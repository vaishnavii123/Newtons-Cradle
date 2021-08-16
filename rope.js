class rope{
	constructor(body1,body2,pointA,pointB,offsetX)
	{
		this.pointA = pointA
		this.pointB = pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}
	this.rope = Constraint.create(options)
	World.add(world,this.rope)
	this.offsetX = offsetX;
	}
	//create rope constraint here
	display(){
	var pointA = this.rope.bodyA.position;
	var pointB = this.rope.bodyB.position;	
	line(pointA.x,pointA.y,pointB.x + this.offsetX,pointB.y )
	}
}
	
    //create display() here 

