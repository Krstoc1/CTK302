var bubbles = [];
let url = "";

function preload () {
  
  s1= loadImage("aset/max.jpg");
  s2= loadImage("aset/car.jpg");
}

function setup() {
  let key = '1E4gA5tveKaNJifMClfbX2ZRULE-MrDOEgyUrgAY76og';
  
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  
  //  let key = "1g6o2AfpufqOBwo1bthRzXYd_S85WxsjYqWIU4t16rzg"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Name"],
        data[i]["Which is better?"],
        data[i]["Rate todays weather"],
      data[i]["Gum Flavor"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  
  background("green");
  image(s2, 0, 0, 600, 600);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(happy, thankful, name, cow) {
    // only the order of these parameters matters!
       this.happy = happy;
    this.thankful = thankful;
    this.name = name;
    this.cow = cow;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("white");
    noFill();
    image(s1, this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.name + "\n" + this.happy + "\n" + this.thankful,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel)
    if (this.pos.x > width) this.pos.x = 0;
  //  (this.pos.x > 0)
    
  }
  
  
}
