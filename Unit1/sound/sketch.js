let sum

function preload(){
  sum = loadSound("tes/high.mp3");
}
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  sum.play();
}

function draw() {
  background("black");
  fill("white");
  text("just a rock sound \nof livin high", 100, 100, 400, 400);

}

function mouseReleased(){
  if(sum.isPlaying()){
    sum.pause();
  } else {
    sum.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
