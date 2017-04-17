//Stanford empty project

// DEFINE variables here
var Sara;
var Durbin;
var wall1;
var wall2;
var wall3;
var wall4;
var wallHits = 0;
var Timmy
var Jimmy
var highScore = 0;
var Score
var immovable
var gameControl = true
function setup() {
createCanvas(800,600);
//INSTANTIATE variables here
Sara= createSprite(100, 150, 100,150);
Durbin= createSprite(100,250,100,150)//wall1 = createSprite();
walls = Group ();
falling= Group();
wall1=createSprite(0,-25,2400,50)
wall2=createSprite(800+50,0+650/2,100,650)
wall3=createSprite(0,625,2400,50)
wall4=createSprite(-25,0+650/2,50,1200)
Timmy=createSprite(500,200,50,50)
Jimmy=createSprite(600,200,50,50)
walls.add(wall1);
walls.add(wall2);
walls.add(wall3);
walls.add(wall4);
falling.add(Timmy);
falling.add(Jimmy);
falling.add(createSprite(200, 50 , 50, 50) );

for(var i = 0; i < walls.length ; i++)
{walls.get(i).immovable = true; }

Sara.friction= .98
Durbin.friction= .98
}








function draw() {
background(200);

if(gameControl == true) {
  textSize(16)
  text("press the space bar in order to start the game.", 800/2, 600/2, 400, 500)

}
if(keyDown(32)){
  gameControl = false;
}
Sara.bounce(walls,resetPlayer);
falling.bounce(wall3, resetLittleBlocks)
for (var i = 0; i < falling.length ; i++){
    falling.get(i).addSpeed (.01*(wallHits+1), 90); }
    text("Number of hits : "+wallHits,50,50);
    text("HighScore : "+highScore,50,100);
    textSize(  [16]  )// move this so block doesn't cover score value
Durbin.bounce(walls, resetPlayer)
falling.bounce(Sara,resetScore);
falling.bounce(Durbin,resetScore);
//UPDATE variables here
drawSprites();
    if(keyDown(37)){

//Put what you want to happen when left is pressed in here
Sara.addSpeed(.05, 180);
//Durbin.addSpeed(.05, 180);
}
if(keyDown(65)){

//Put what you want to happen when left is pressed in here
//Sara.addSpeed(.05, 180);
Durbin.addSpeed(.05, 180);
}

if(keyDown(39)){
//Put what you want to happen when right is pressed in here
Sara.addSpeed(.05, 360);
//Durbin.addSpeed(.05,360);
}
if(keyDown(68)){
//Put what you want to happen when right is pressed in here
//Sara.addSpeed(.05, 360);
Durbin.addSpeed(.05,360);
}
if( keyDown(38)){
//Put what you want to happen when right is pressed in here
Sara.addSpeed(.05,270);
//Durbin.addSpeed(.05,270);
}
if( keyDown(87)){
//Put what you want to happen when right is pressed in here
//Sara.addSpeed(.05,270);
Durbin.addSpeed(.05,270);
}
if( keyDown(40)){
//Put what you want to happen when right is pressed in here
Sara.addSpeed(.05,90);
//Durbin.addSpeed(.05,90);
}
if( keyDown(83)){
//Put what you want to happen when right is pressed in here
//Sara.addSpeed(.05,90);
Durbin.addSpeed(.05,90);

}
}

function resetPlayer(spriteA, spriteB) {
    spriteA.position.x=400;
    spriteA.velocity.y=0;
}
function resetLittleBlocks(spriteA, spriteB) {
    spriteA.position.y=50;
    spriteA.velocity.y=0;
    spriteA.velocity.x=0;
    spriteA.position.x=random(0,800)
    wallHits=wallHits+1;
}
function resetScore(spriteA, spriteB) {
if(wallHits>highScore){highScore=wallHits;}
wallHits=0
}
