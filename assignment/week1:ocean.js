
const gap = 10; 
const numLines = 50; //asked chatgpt to help me make lines in an easier way than the one in the example

let counter = 0;

function setup() {
  createCanvas(800, 600);
  frameRate(15);
}

function draw() {
  background(255, 255, 255);
  noFill();
  strokeWeight(8);


  let y = 80;
 
  //for the horizontal lines
  for (let i = 0; i < numLines; i++) {

let r = random(0, 40);
let g = random(80, 160);
let b = random(180, 255);
stroke(r, g, b);

    beginShape();
    for (let x = 0; x <= width; x += 10) {
      let yOffset = noise(x * 0.01, i * 0.2, counter) * 40 - 20;

      vertex(x, y + yOffset);
      //strokeWeight(random(5, 8));
      //stroke(random(50, 100, 150));
      
    }
endShape();
y += gap;
      
      }
    
     counter += 0.01;
    
    }