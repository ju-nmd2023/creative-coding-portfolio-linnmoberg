const gap = 20; 
const numLines = 20;
let colors = []; 

function setup() {
  createCanvas(800, 600);
  generateColors();
}

function draw() {
  background(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(1);


  let y = 80;
  let colorIndex = 0;
 
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
      stroke(colors[colorIndex % colors.length]); //this line is taken from ChatGPT, https://chatgpt.com/c/68c68590-6414-8324-9c50-4c1f8491939b
      rotate(angle);
      line(0, 0, len, 0);
      pop();

      colorIndex++; //This line is taken from ChatGPT, https://chatgpt.com/c/68c68590-6414-8324-9c50-4c1f8491939b
      
      }
    
     y += gap;
    
    }
    

    noLoop();
  }

  function mousePressed() {
    generateColors();
    redraw();  //This line chatGPT helped me with
  }

  function generateColors () {
    colors = [];
    for (let i = 0; i < 200; i++) {
        colors.push(color(random(255), random(255), random(255)));
    }
  }