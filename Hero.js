class Hero {
  constructor(x,y,r)
	{
		var options = { 
			'restitution':0.8,
            'friction':1.0,
            'density':1.0,

			frictionAir: 0
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superhero1.png");
		this.body= Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	
	display()
	{
			this.body.position.x = mouseX;
			this.body.position.y = mouseY;
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y);
			rectMode(CENTER)
			fill(255,0,255)
		    imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
