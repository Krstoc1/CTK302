let x=0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);
push();
translate(x, 0);
avatar();
x+=6;
if (x> width){
  x= -400;
}
pop();
}

function avatar() {

  fill("purple");
vertex(100, 200);
bezierVertex(100, 200, 90, 400, 150, 280);
  bezierVertex(150, 280, 160, 380, 210, 280);
   bezierVertex(210, 280, 240, 380, 260, 280);
    bezierVertex(260, 280, 300, 380, 300, 200);
endShape();

fill("purple");
arc(200, 200, 200, 200, PI, TWO_PI);

  fill("black");
  arc(136, 142, 50, 50, 0, PI + QUARTER_PI, CHORD);
  
   fill("black");
  arc(235, 140, 50, 50, 5, PI + QUARTER_PI, CHORD);
  
  
  fill("red");
  ellipse(143, 147, 10, 10);

  fill("red");
  ellipse(235, 147, 10, 10);

  beginShape();
  fill("black");
vertex(110, 200);
bezierVertex(180, 200, 120, 300, 260, 200);
endShape();
}