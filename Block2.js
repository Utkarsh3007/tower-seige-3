class Block2 {
    constructor(x, y, width, height) {
        var option = {
        isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        this.Visibility=255
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
    
        if(this.body.speed>3){
            push();
            this.Visibility=this.Visibility-15
            tint(255,this.Visibility)
            World.remove(world,this.body)
            pop();
        }
       else{ 
        rectMode(CENTER)
        fill("#FFC0CB")
        stroke("black")
        strokeWeight(2.5)
        rect(pos.x,pos.y, this.width, this.height)                         
       }                          
    }
    score(){
        if(this.Visibility<0 && this.Visibility>-105){
            score++
        }
    }
}