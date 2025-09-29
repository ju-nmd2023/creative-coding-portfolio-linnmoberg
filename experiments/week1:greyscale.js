function setup() {
    createCanvas(800, 800);
    background(250, 240, 230);
    noLoop();


let colors = [
    color(60),
    color(120),
    color(100),
    color(150),
    color(160),
];

for (let i = 0; i < 120; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(100, 150);
    let h = random(100, 60);

    stroke(250, 220, 200);
    strokeWeight(6);
    fill(random(colors));
    rect(x, y, w, h);

    noStroke();
    fill(random(colors));
    rect(x + random(-5, 5), y + random(-5, 5), w, h);
}
}
