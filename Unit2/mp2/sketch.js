var myState = 0;
var timer = 0;
var mic;
var volume;
let s1, s2, s3, s4;

function preload() {
  s1 = loadImage('aset/charge.jpeg');
  s2 = loadImage('aset/there.jpeg');
  s3 = loadImage('aset/kill.jpeg');
  s4 = loadImage('aset/fight.jpeg');
}


function setup() {
  
  createCanvas(800, 800);
  r = 360;
  y = 360;
  x = 355;
  z = 355;
  mic = new p5.AudioIn();
  mic.start();
  a = 200;
  b = 160;
}

function draw() {
  push();
  fill('black');
  rect(400, 350, 800, 100);
  switch (myState) {
    case 0:
      image(s1, 0, 0, 800, 800);
      fill('White');
      textSize(30);
      text("Evil makes its way to wingwood!!!", 10, 100);

      pop();
      vol = mic.getLevel();
      vol = vol * 100;
      if (vol > 60) {
        myState = 2;
      }
      timer++;
      if (timer > 200) {
        myState = 2;
        timer = 0;
      }
      y = y - 0.1;
      if (y < 355) {
        y = 360;
        redraw(192);
      }

      break;

    case 1:
      image(s2, 0, 0, 800, 800);

      
      pop();
      vol = mic.getLevel();
      vol = vol * 100;
      if (vol > 60) {
        myState = 2;
      }
      timer++;
      if (timer > 100) {
        myState = 2;
        timer = 0;
      }
      break;

    case 2:
      image(s4, 0, 0, 800, 800);
      fill('White');
      textSize(30);
      text("The slug makes it to the gate, clap to squish!", 10, 100);

      pop();
      vol = mic.getLevel();
      vol = vol * 100;
      if (vol > 60) {
        myState = 4;
      }
      timer++;
      if (timer > 200) {
        myState = 3;
        timer = 0;
      }
      z = z + 0.1;
      if (z >= 360) {
        z = 355
        redraw(192);
      }

      break;
    case 3:
      image(s4, 0, 0, 800, 800);
      pop();
      vol = mic.getLevel();
      vol = vol * 100;
      if (vol > 60) {
        myState = 4;
      }
      timer++;
      if (timer > 100) {
        myState = 4;
        timer = 0;
      }
      break;
    case 4:
      image(s3, 0, 0, 800, 800);
      pop();
      vol = mic.getLevel();
      vol = vol * 100;
      if (vol > 60) {
        myState = 4;
      }
      timer++;
      if (timer > 100) {
        myState = 0;
        timer = 0;
      }
      break;
  }
  fill('green');
  rect(a, 20, 100, 40);
  fill('yellow');
  text('you', b, 50, 10, 90);


  a = a + 1.3;
  b = b + 1.3;
  if (a > 550) {
    a = 200;
    b = 160;
    redraw(240);
 }
 fill('yellow');
 textSize(30);
 text("Help!!! Assist squashing the evil slug!", 20, 780);
}