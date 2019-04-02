// noprotect

var a = 0.2;
var b = 0.2;
var c = 5.7;
var x = 0;
var y = 1;
var z = 1;
var dt = 0.01;
var dx, dy, dz;

function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  noLoop();
}

function draw() {
  stroke(0);
  
  rotateX(20);
  rotateZ(radians(-120));
  
  for (i = 0; i < 100000; i++) {
    var prevx = x;
    var prevy = y;
    var prevz = z;
    
    dx = (-y - z)*dt;
    dy = (x + a*y)*dt;
    dz = (b + z*(x-c))*dt;

    x += dx;
    y += dy;
    z += dz;
    
    line(prevx*12, prevy*12, prevz*12-100, x*12, y*12, z*12-100);
  }
}
