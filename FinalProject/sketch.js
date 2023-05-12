

var s;
var scl = 20;
var food;
let mouse;
let animation;
let miceAnimation;
let sample,sample2;
let background_music;

const GameState = {
  Start: "Start",
  Playing: "Playing",
  GameOver: "GameOver"
};
let game = { score: 0, maxScore: 0,state: GameState.Start, };
function reset()
{
  game.score = 0;
}
function preload() 
{
  mouse = loadImage("assets/mouse_running.png")
  sample = loadSound("assets/swallow.mp3")
  sample2 = loadSound('assets/miss.mp3')
  sample3 = loadSound("assets/snake.mp3")
  background_music = loadSound('assets/bgm.mp3')
  bg = loadImage('assets/sand.jpeg');
}

function setup() {
  
  // if("serial" in navigator)
  // {
  //   let button = createButton("connect");
  // button.position(0,0);
  // button.mousePressed(connect);

  //   // the web serial API is supported
    

  // }
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10); 
	food = createVector(random(width), random(height));
	pickLocation(); 
}


// async function connect()
// {
//   port = await navigator.serial.requestPort();
//   await port.open({baudRate: 9600})

// }
function pickLocation() {
  var cols = floor(width/scl);
	var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));//this ensure the food is in the grid aligned with snake
	food.mult(scl);//to expand it back out


}

function draw() {
  switch(game.state)
  {
    case GameState.Playing:
  // background_music.play();
  background(bg);
  fill(0);
  textSize(40);
  text(game.score,20,40);
  if (s.eat(food)) {
    
  	pickLocation();
  }
  s.death();
  s.update();
  s.show();
	
  //drawing snake food
  fill(211, 211, 211);
  rect(food.x, food.y, scl, scl);
  break;
  case GameState.GameOver:
    background_music.stop();
  //if snake eat food, pick location
  game.maxScore = max(game.score,game.maxScore);

      background(0);
      fill(255);
      textSize(40);
      textAlign(CENTER);
      text("Game Over!",200,200);
      textSize(35);
      text("Score: " + game.score,200,270);
      text("Max Score: " + game.maxScore,200,320);
      break;
      case GameState.Start:
      
      background(0);
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text("Snake Game",300,200);
      textSize(30);
      text("Press Any Key to Start",300,300);
      break;
  
}
}

function mousePressed() 
{
  
  switch(game.state) 
  {
    case GameState.Start:
    game.state = GameState.Playing;
    background_music.play()


    
    case GameState.GameOver:
      background_music.stop()
      reset();
      game.state = GameState.Playing;
      break;
 }
}
function keyPressed()
{
  switch(game.state){
    case GameState.Playing:
  if (keyCode === UP_ARROW) {
    s.dir(0, -1); //moves 0 along x and -1 (up) along y axis
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
  break;
  }
}


