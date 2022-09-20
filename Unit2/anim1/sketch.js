let x=0;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("tes/vand.ttf");
}

function draw() {
  background (100);
  text("BATMAN", x, 100, 100, 100)
  textSize(25);
  textFont(f1);
  x +=5;
  if (x > width){
    x=0;
  }
}
