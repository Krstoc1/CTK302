function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#181a36");
  
  fill("darkgreen");
rect(0, 270, 400, 200);
  
  if (mouseIsPressed) {
     background("#181a36");
    fill("black");
    vertex(100, 200);
bezierVertex(100, 50, 60, 400, 150, 150);
    bezierVertex(100, 200, 90, 400, 150, 280);
    endShape();
    
      vertex(100, 200);
     bezierVertex(255, 116, 90, 400, 360, 215);
    endShape();
    
    ellipse(200, 200, 200, 200);
    
    fill("red");
   ellipse(143, 147, 10, 10);
    
      fill("red");
  ellipse(235, 147, 10, 10);
    
    
    let z='The "Ghast" that keeps your awareness in sight of harms way...';
fill(50);
fill("white");
text(z, 10, 20, 200, 80);
   
       
  } else {
let s='Here as a young goul of the night, though during the day, in the corner of your eye he becomes...';
fill(50);
fill("white");
text(s, 10, 20, 200, 80);

  fill("purple");
vertex(100, 200);
bezierVertex(100, 200, 90, 400, 150, 280);
  bezierVertex(150, 280, 160, 380, 210, 280);
   bezierVertex(210, 280, 240, 380, 260, 280);
    bezierVertex(260, 280, 300, 380, 300, 200);
endShape();
  
  ///noFill();
//stroke(255, 102, 0);
//stroke(0, 0, 0);
//bezier(100, 281, 111, 151, 200, 210, 100, 200);
  //bezier(100, 281, 111, 151, 200, 210, 200, 300);
 // bezier(200, 300, 200, 300, 200, 100, 215, 300);
 // bezier(300, 281, 271, 151, 215, 210, 300, 200);
//  bezier(300, 281, 271, 151, 200, 210, 215, 300);

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
  
 fill("#181a36");
  text(mouseX+ ", " + mouseY, 20, 20)
}

function mouseReleased() {
  print(mouseX+ ", " + mouseY);
}
