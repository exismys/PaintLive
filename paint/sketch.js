let socket;
function setup() {
    createCanvas(400, 400);
    background(0);
    socket = io.connect()
    socket.on("mousePos", (data) => {
        noStroke();
        fill(255, 0, 0);
        circle(data.x, data.y, 5);
    })
}

function mouseDragged() {
    noStroke();
    fill(255);
    circle(mouseX, mouseY, 5);
    let data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit("mousePos", data);
}

function draw() {
    
}