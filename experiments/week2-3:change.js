let agents = [];
let field;

const gridSize = 20;
let cols, rows;

function setup() {
    createCanvas(600, 800);
    background(0);

    // got some help by chatgpt to make it work here
    cols = ceil(width / gridSize);
    rows = ceil(height / gridSize);
    field = generateField();

    for (let i = 0; i < 300; i++) {
        agents.push(new Agent(random(width), random(height), 2, 0.1));
    }
}

function draw() {
    for (let agent of agents) {
        let x = floor(agent.position.x / gridSize);
        let y = floor(agent.position.y / gridSize);
        
        x = constrain(x, 0, cols -1);
        y = constrain(y, 0, rows -1);
        
        let desired = field[x][y]; // got help with chatGPT here because my code did not work but with this it worked, https://chatgpt.com/c/68d3a4f7-9ce0-832a-923f-c750614f29c5

        agent.follow(desired);
        agent.update();
        agent.checkBorders();
        agent.show();
    }
}

//got help with this code in one of the examples with flow fields, https://codepen.io/pixelkind/pen/OJrRzOm
class Agent {
    constructor(x, y, maxSpeed, maxForce) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D(); //chatgpt help me here
        this.acceleration = createVector(0, 0);
        this.maxSpeed = maxSpeed;
        this.maxForce = maxForce;
    }

    follow(desiredDirection) {
        let desired = desiredDirection.copy();
        desired.mult(this.maxSpeed);
        let steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);
        this.applyForce(steer);
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    checkBorders() {
        if (this.position.x < 0) this.position.x = width;
        if (this.position.x > width) this.position.x = 0;
        if (this.position.y < 0) this.position.y = height;
        if (this.position.y > height) this.position.y = 0;
    }

    show() {
        noFill();
        stroke(200, 100);
        ellipse(this.position.x, this.position.y, random(5, 30));
    }
}

// -- Flow Field --

//got help with this code in one of the examples with flow fields, https://codepen.io/pixelkind/pen/OJrRzOm
function generateField() {
    let field = [];
    noiseSeed(random(1000));

    for (let x = 0; x < cols; x++) {
        field.push([]);
        for (let y = 0; y < rows; y++) {
            let angle = noise(x * 0.1, y * 0.1) * TWO_PI * 2; //chatgpt helped me here with the TWO_PI
            field[x].push(p5.Vector.fromAngle(angle));
        }
    }

    return field;
}