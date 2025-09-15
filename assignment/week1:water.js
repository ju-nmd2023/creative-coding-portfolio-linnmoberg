
const gap = 20; 
const numLines = 20; //asked chatgpt to help me make lines in an easier way than the one in the example

let counter = 0;

function setup() {
  createCanvas(800, 600);
  frameRate(30);
}

function draw() {
  background(255, 255, 255);
  noFill();
  stroke(0, 100, 150);
  strokeWeight(1);


  let y = 80;
 
  //for the horizontal lines
  for (let i = 0; i < numLines; i++) {
    beginShape();
    for (let x = 0; x <= width; x += 10) {
      let yOffset = noise(x * 0.01, i * 0.2, counter) * 40 - 20;

      vertex(x, y + yOffset);
    }
endShape();
y += gap;
      
      }
    
     counter += 0.01;
    
    }
    

    //noLoop();
  

 