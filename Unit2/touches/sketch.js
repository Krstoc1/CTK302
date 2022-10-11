let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("no one is touching the screen", 5, 22) ; 
      break ;
      
      case 1:  
      image("aset/1.jpg", width/2, height/2);
      text("first shark", 5, 22) ;
      break ;
      
      case 2:
        image("aset/2.jpg", width/2, height/2);
      text("another RAWR", 5, 22) ; 
            // put a picture here
      break ;
      
      case 3:
        image("aset/3.jpg", width/2, height/2);
     text("Last one", 5, 22) ; 
            // put a picture here
      break ;
    
      
  }
  
}