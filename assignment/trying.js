let synth;

function setup() {
  createCanvas(400, 200);
  synth = new Tone.Synth().toDestination();
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(220);
  text('Click to play a note 🎶', width / 2, height / 2);
}

function mousePressed() {
  Tone.start().then(() => {
    synth.triggerAttackRelease("C4", "8n");
  });
}