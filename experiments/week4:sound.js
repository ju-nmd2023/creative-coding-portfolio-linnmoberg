let myButton;
let synth;
let circleColor;

window.addEventListener("load", () => {
    synth = new Tone.PolySynth().toDestination();
});

window.addEventListener("click", () => {
    Tone.start();
});

function setup() {
    createCanvas(600, 800);
    background(0);
    stroke(150);
    noFill();

    circleColor = color(random(255), random(255), random(255));

    myButton = createButton('Click Me!');
    myButton.position(690, 400);
    myButton.mousePressed(playMusic);
 
}

function draw() {

    stroke(circleColor);
       for (let i = 0; i < 300; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        ellipse(x, y, r, r);
    }

    noLoop();

}

function playMusic() {
synth.triggerAttackRelease("C4", "1n");
circleColor = color(random(255), random(255), random(255));

redraw();
}

