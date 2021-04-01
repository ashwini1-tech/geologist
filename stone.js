class Stone{
	constructor(x,y)
	{
	
	var options= {
		"restitution" :0.8 ,
		"friction" :   0.9,
		"density" : 12

	}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(x,y,50,50, options)
        this.width=50
        this.height=50

		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			
			strokeWeight(4);
			stroke("black");
			fill("black")
			rect(0,0, this.width, this.height)
						pop()
	}
}

