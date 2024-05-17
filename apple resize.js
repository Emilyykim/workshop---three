let img; 

function preload() {
img = loadImage('images/apples, jpg');
}

function setup() {
  createCanvas(400, 400);
  img, resize (300, 0);
}

function draw() {
  background(220);
 image(img, 0, 0);
}
