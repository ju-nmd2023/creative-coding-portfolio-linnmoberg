
const gap = 20; 
const numLines = 20; //asked chatgpt to help me make lines in an easier way than the one in the example

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255, 255, 255);
 // noFill();
  stroke(0, 0, 0);
  strokeWeight(1);


  let y = 80;
 
  //for the horizontal lines
  for (let i = 0; i < numLines; i++) {
    let xStart = random(50, 150);
    let xEnd = random(550, 450);
    line(xStart, y, xEnd, y);

    //for the random smaller lines
    let numDiagonals = int(random(1, 3));

    for (let k = 0; k < numDiagonals; k++) {
      let x = random(90, width - 90);
      let len = random(30, 120);
      let angle = random(-PI/4, PI/4);
      

      push();
      translate(x, y);
      rotate(angle);
      line(0, 0, len, 0);
      pop();
      
      }
    
     y += gap;
    
    }
    

    noLoop();
  }

 