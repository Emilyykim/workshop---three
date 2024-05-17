
let bananas;

function preload (){ 
 bananas = loadImage ('images/bananas.jpg');
}

function setup(){
createCanvas (800, 500); 
 background (0);
}
function draw() {
let x = random (bananas.width);
let y = random (bananas.height);
let c = bananas. get (int (x), int (y));
fill(c);
nostroke();
rect (x, y, 20, 20);
}