const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0
function preload() {
    poly = loadImage("polygon.png")
}

function setup() {
    var canvas = createCanvas(1200, 400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);

    ball = Bodies.circle(100, 250, 20);
    World.add(world, ball);

    sling=new Slingshot(this.ball,{x:100,y:250})

    holder1=new Ground(450,300,250,10)
    
    holder2=new Ground(850,200,250,10)

    //holder1 1st level
    b1=new Block3 (360,275,30,40)
    b2=new Block3 (390,275,30,40)
    b3=new Block3 (420,275,30,40)
    b4=new Block3 (450,275,30,40)
    b5=new Block3 (480,275,30,40)
    b6=new Block3 (510,275,30,40)
    b7=new Block3 (540,275,30,40)
    //holder1 2nd level
    b8=new Block2 (390,235,30,40)
    b9=new Block2 (420,235,30,40)
    b10=new Block2 (450,235,30,40)
    b11=new Block2 (480,235,30,40)
    b12=new Block2 (510,235,30,40)
    //holder1 3rd level
    b13=new Block1 (420,205,30,40)
    b14=new Block1 (450,205,30,40)
    b15=new Block1 (480,205,30,40)
    //holder1 last level
    b16=new Block4 (450,175,30,40)

    //holder2 1st level
    h1=new Block3(760,175,30,40)
    h2=new Block3(790,175,30,40)
    h3=new Block3(820,175,30,40)
    h4=new Block3(850,175,30,40)
    h5=new Block3(880,175,30,40)
    h6=new Block3(910,175,30,40)
    h7=new Block3(940,175,30,40)
    //holder2 2nd level
    h8=new Block2(790,145,30,40)
    h9=new Block2(820,145,30,40)
    h10=new Block2(850,145,30,40)
    h11=new Block2(880,145,30,40)
    h12=new Block2(910,145,30,40)
    //holder2 3rd level
    h13=new Block1(820,115,30,40)
    h14=new Block1(850,115,30,40)
    h15=new Block1(880,115,30,40)
    //holder2 last level
    h16=new Block4(850,80,30,40)


       


}

function draw() {
    background("black");
    Engine.update(engine);
    
    fill(255)
    textSize(25)
    text("SCORE : "+score,1000,80)
    
fill(255)
textSize(20)
text("PRESS SPACE TO PLAY AGAIN",800,350)

    strokeWeight(4);

    ground.display();

    imageMode(CENTER);
    image(poly, ball.position.x, ball.position.y, 50, 50)

    sling.display();

    holder1.display();
    holder2.display();

    //holder1 1st level
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    //holder1 2nd level
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    //holder1 3rd level
    b13.display();
    b14.display();
    b15.display();
    //holder1 last level 
    b16.display();

    //holder2 1st level
    h1.display();
    h2.display();
    h3.display();
    h4.display();
    h5.display();
    h6.display();
    h7.display();
    //holder2 2nd level
    h8.display();
    h9.display();
    h10.display();
    h11.display();
    h12.display();
    //holder2 3rd level
    h13.display();
    h14.display();
    h15.display();
    //holder2 last level
    h16.display();   

    //SCORE HOLDER 1
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    b10.score();
    b11.score();
    b12.score();
    b13.score();
    b14.score();
    b15.score();
    b16.score();

   // SCORE HOLDER 2
   h1.score();
   h2.score();
   h3.score();
   h4.score();
   h5.score();
   h6.score();
   h7.score();
   h8.score();
   h9.score();
   h10.score();
   h11.score();
   h12.score();
   h13.score();
   h14.score();
   h15.score();
   h16.score();

}
keyPressed();
    
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(this.ball,{x:100,y:250})
        sling.attach(this.ball);
        
}
}

