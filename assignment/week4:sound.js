let agents = [];
let field;

const gridSize = 25;
const divider = 50; // got help here by chatGPT, https://chatgpt.com/c/68d4ff2d-fa74-832c-9016-c9ab37d64375
let cols, rows; 

function setup() {
    createCanvas(600, 800);
    background(0);
    cols = ceil(width / gridSize);
    rows = ceil(height / gridSize);
    field = generateField();

}

function draw() {
    fill(0, 15);
    rect(0, 0, width, height);

    if (frameCount % 5 === 0) {
        agents.push(new Agent(random(width), random(height / 5), 2, 0.1));
    }

    for (let i = agents.length - 1; i >= 0; i--) { // got help with this in chatGPT, https://chatgpt.com/c/68d3a3f3-b96c-8322-b388-ee7d8451398a
        let agent = agents[i]; 

        let x = floor(agent.position.x / gridSize);
        let y = floor(agent.position.y / gridSize);
        x = constrain(x, 0, cols - 1);
        y = constrain(y, 0, rows - 1);

        let desired = field[x][y];
        agent.follow(desired); 
        agent.update();
        agent.checkBorders();
        agent.show();

        if (agent.isDead()) {
            agents.splice(i, 1);
        }
    }
}

class Agent {
    constructor(x, y, maxSpeed, maxForce) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.acceleration = createVector(0, 0);
        this.maxSpeed = maxSpeed;
        this.maxForce = maxForce;
        this.lifespan = 255;
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
        this.lifespan -= 2;
    }

    checkBorders() {
        if (this.position.x < 0) this.position.x = width;
        if (this.position.x > width) this.position.x = 0;
        if (this.position.y < 0) this.position.y = height;
        if (this.position.y > height) this.position.y = 0;
    }

    show() {
        noFill();
        stroke(100 + random(155), 150, 255, this.lifespan);
        ellipse(this.position.x, this.position.y, random(5, 25));
    }

    isDead() {
        return this.lifespan <= 0;
    }
}

//got help with this code in one of the examples with flow fields, https://codepen.io/pixelkind/pen/OJrRzOm
function generateField() {
    let field = []; 
    noiseSeed(random(1000));

    for (let x = 0; x < cols; x++) {
        field.push([]);
        for (let y = 0; y < rows; y++) {
            let angle = noise(x / divider, y / divider) * TWO_PI; //// got help here by chatGPT, https://chatgpt.com/c/68d4ff2d-fa74-832c-9016-c9ab37d64375
            field[x].push(p5.Vector.fromAngle(angle));
        }
    }
    return field;
}