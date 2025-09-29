function setup() {
    createCanvas(600, 800);
    background(0);
    stroke(150);
    noFill();

    for (let i = 0; i < 300; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        ellipse(x, y, r, r);
    }
}