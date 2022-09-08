let i2, i3;
let i5, i6;
let i4;

function setup() {
  createCanvas(500, 500);
  i5 = loadImage("assests/cow.jpg");
  i2 = loadImage("assests/sp.jpg");
  i3 = loadImage("assests/spc.jpg");
  imageMode(CENTER);
}

function draw() {
  background("grey");
  image(i5, width/2, height/2 -120, 100, 100);
  image(i2, width/2, height/2, 100, 100);
  image(i3, width/2, height/2 +120, 100, 100);
}
