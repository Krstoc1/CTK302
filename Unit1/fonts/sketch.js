let f2, f3;
let f1;

function setup() {
  createCanvas(500, 500);
  f2 = loadFont("tes/mlk.ttf");
  f3 = loadFont("tes/mugs.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f2,48);
  text("hello there!", width/2, 100);
  textFont(f3, 48);
  text("I am Ironman", width/2, 200);
}
