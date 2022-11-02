
let cars = [];
let s1 ;

function preload () {
  
  s1= loadImage("aset/cat.jpg");
}

function setup() {
  createCanvas(500, 500);

  for (let i=0 ; i < 20 ; i++){

  cars.push(new Car());
  }

}

function draw() {
  background(s1);
  for (let i=0 ; i < 20 ; i++){
  cars[i].display();
  cars[i].move();
 
  }
}




class Car {

  // constructor
  constructor() {
    this.pos = createVector(width/2, height/2) ;
    this.vel = createVector(random(-10, 10), random(-10, 10)) ;
      // initialize your attributes here
    
  }

  // methods

  display() {
    fill("blue")
    textSize(20);
    text('rawr', this.pos.x, this.pos.y, 25);
  }

  move() {
    this.pos.add (this.vel);
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y= height;
  }
  
}