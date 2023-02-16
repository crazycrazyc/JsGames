

let preSound;
let ShootSound;
let hero = null;
let heroImage = null;

function preload() {



 soundFormats('mp3', 'ogg');
 preSound = loadSound('assets/a.mp3');
  
 shootSound = loadSound('assets/shootSound.mp3');

 gameController.images['candy'] = loadImage('assets/candy.png');
 gameController.sounds['jump'] = loadSound('assets/jump3.mp3');

 gameController.images['hero'] = loadImage('assets/heroImage.png');
 gameController.images['bird'] = loadImage('assets/birdImage.png');
 gameController.images['monster'] = loadImage('assets/monsterImage.png');

 //gameController.images['monster'] = loadImage('assets/monsterImage.png');
}

let current = null;
let blaster = null;


function setup() {
  createCanvas(400,400);
  // preSound.play();
  // return ;

  imageMode(CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);

  let welcome_scene = new Welcome('sb');
  let scene = new BattleScene('level1');
  
  

  //blaster = new Blaster(blaster_array); // 一个鬼
  // 一个星

  //layer_blaster.addSprite(blaster);
  

  gameController.addScene(welcome_scene);
  gameController.addScene(scene);
  // gameController.setCurrentScene('sb');
  

  // 以上舞台初始化工作完成 



}

function draw() {
  
  // console.log('draw...');
  gameController.draw();

  push();
  noStroke();
  fill('greenyellow');
  rectMode(CORNER);
  rect(0,height-height/7,width,400);
  pop();
  }

function mousePressed(){
  gameController.getCurrentScene().mousePressed();
  console.log("mousePressed..");
  
}

function keyPressed(){
  //gameController.setCurrentScene('level1');
  gameController.getCurrentScene().keyPressed();



}



