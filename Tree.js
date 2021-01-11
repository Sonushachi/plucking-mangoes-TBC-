class Tree{
    constructor(x,y,width,height){
        var options={

            isStatic: true

        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image  = loadImage("images/tree.png");

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

      //  this.bBody = Bodies.rectangle(this.x,this.y,this.treeWidth,this.treeThickness,{isStatic:true});
      //  this.lBody = Bodies.rectangle(this.x,this.y,this.treeThickness,this.treeHeight,{isStatic:true});
      //  this.rBody = Bodies.rectangle(this.x + this.treeWidth,this.y,this.treeThickness,this.treeHeight,{isStatic:true});
      //  World.add(world,this.bBody);
      //  World.add(world,this.lBody);
      //  World.add(world,this.rBody);
    }

    display(){
        var treepos = this.body.position;

        push();
        translate(treepos.x,treepos.y);

        imageMode(CENTER);
        image(this.image,this.x,this.y,30,400);

        pop();
    }
}