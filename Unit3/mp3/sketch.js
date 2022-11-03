let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let s1, s2, s3, s4, s5 ;

function preload () {
  
  s1= loadImage("aset/fors.png");
  s2= loadImage("aset/start.png");
  s3= loadImage("aset/lose.png");
  s4= loadImage("aset/ogar.png");
  s5= loadImage("aset/you.png");
  s6= loadImage("aset/win.png");
}
function setup() {
  createCanvas(1080, 720);
  rectMode(CENTER);
  ///imageMode(CENTER);

  // Spawn objects
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
}

function draw() {

  switch (state) {
    case 0: // menu
      background(s2);
      break;

    case 1:
      game();
      timer++;
      if (timer > 20 * 60) {
        timer = 0;
        state = 3;
    
      }
      break;

    case 2: // win
      background(s6);
      break;

    case 3: // lose
      background(s3);
    
      break;
  }
}

function resetTheGame() {
  cars = [];

  for (let i = 0; i < 4; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function mouseReleased() {
  switch (state) {
    case 0: // menu screen
      state = 1;
      break;

    case 2: // win screen
      resetTheGame();
      state = 0;
      break;

    case 3: // lose screen
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  background(s1);

  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  // add a "frog"
  image(s5, frogPos.x, frogPos.y, 200, 200);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  
  if (frogPos.x > width) frogPos.x = width ;
  
  
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(100, 700), 50); // initialize your attributes here
    this.velocity = createVector(0, random(1, 5));
    this.r = random(500);
    this.g = random(500);
    this.b = random(500);
    this.o = random(500);
    this.size = random(200, 200);
    // this.type = random(3) ;
  }
  // methods

  display() {
    // this can be text, images, or shapes
   // fill(this.r, this.g, this.b, this.o);
   // rect(this.pos.x, this.pos.y, this.size, 25);
     image(s4, this.pos.x, this.pos.y, 150, 150) ;
  }

  move() {
    this.pos.add(this.velocity);
    
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
