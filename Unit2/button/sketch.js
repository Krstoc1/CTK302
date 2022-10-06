let state = 0;



function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {


switch (state) {


  case 0:
  background('red');
  text("what do u call a cow with no legs", width/2, height/2, 400, 400);
  break;

  case 1:
    background('blue');
    text("ground beef", width/2, height/2, 400, 400);
    break;

}

rect(100, 100, 100);

}

function mouseReleased(){
  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200)
state++;
if (state >1) state= 0;

}
