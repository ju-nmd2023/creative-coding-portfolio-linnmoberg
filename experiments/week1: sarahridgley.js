function setup() {
    createCanvas(800, 800);
    background(250, 240, 230);
    noLoop();


let colors = [
    color(220, 50, 47),
    color(38, 139, 210),
    color(42, 161, 152),
    color(181, 137, 0),
    color(147, 161, 161),
];

for (let i = 0; i < 120; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(20, 80);
    let h = random(10, 60);

    stroke(250, 220, 200);
    strokeWeight(6);
    fill(random(colors));
    rect(x, y, w, h);

    noStroke();
    fill(random(colors));
    rect(x + random(-5, 5), y + random(-5, 5), w, h);
}
}