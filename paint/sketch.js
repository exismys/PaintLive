let socket;
function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.8);
  background(0);
  socket = io.connect();
  socket.on("mousePos", (data) => {
    noStroke();
    fill(255, 0, 0, 100);
    circle(data.x, data.y, 15);
  });
}

function draw() {}

function mouseDragged() {
  noStroke();
  fill(255, 255, 255, 100);
  circle(mouseX, mouseY, 15);
  let data = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit("mousePos", data);
}
