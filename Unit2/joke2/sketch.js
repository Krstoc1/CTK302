let state = 0;
let timer= 0;



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

timer++;
if (timer > 4 * 60) {
timer= 0;
state++;
if (state >1) {
  state=0;
}
}
}