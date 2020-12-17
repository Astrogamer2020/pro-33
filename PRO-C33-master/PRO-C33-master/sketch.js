var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var count=0;
var turn=0;
var particle=null;
var gamestate;
var start;
var end;
var gamestate="start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    

    //line1=new Line(400,470,800,15);
}
 


function draw() {
  background("black");
  textSize(20)

  Engine.update(engine);

  text("Score:"+score,20,20);
  text("100",28,540);
  text("500",108,540);
  text("300",188,540);
  text("500",268,540);
  text("200",348,540);
  text("400",428,540);
  text("500",508,540);
  text("100",588,540);
  text("200",668,540);
  text("300",748,540);
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  //  if(frameCount%60===0){
  //   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  // }
  
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
   
   if(particle!==null){
      particle.display();
  
      if(particle.body.position.y>760){
        if(particle.body.position.x>800){
          score=score+500;
          particle=null;           
        }
        else  if(particle.body.position.x>720){
          score=score+200;
          particle=null;           
        }
        else  if(particle.body.position.x>640){
          score=score+300;
          particle=null;           
        }
        else  if(particle.body.position.x>560){
          score=score+100;
          particle=null;           
        }
        else  if(particle.body.position.x>480){
          score=score+500;
          particle=null;           
        }
        else  if(particle.body.position.x>400){
          score=score+400;
          particle=null;           
        }
        else  if(particle.body.position.x>320){
          score=score+200;
          particle=null;           
        }
        else  if(particle.body.position.x>240){
          score=score+500;
          particle=null;           
        }
          else if(particle.body.position.x>160){
            score=score+300;
            particle=null;           
          }
           else if(particle.body.position.x>80){
          score=score+500;
          particle=null;        
        } 
      
          
         
         
         
          
      }
    }
 
   if(count>=5){
    gamestate="end";
    fill("white")
    textSize(100);
    text("GAME OVER",100,400);
  }
}

function mousePressed () {
  if(gamestate!=="end"){
    count++;
    particle=new Particle(mouseX,10,10);
    console.log("particle");
  }


}