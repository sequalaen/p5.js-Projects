// noprotect

var a = 0.95;
var b = 0.7;
var c = 0.6;
var d = 3.5;
var e = 0.25;
var f = 0.1;
var r = 160;
var x = 0.1;
var y = 0;
var z = 0;
var dt = 0.01;
var dx, dy, dz, px, py, pz;

function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  
  noLoop();
}

function draw() {
  stroke(0, 200);
  
  rotateX(radians(90));
  
  for (i = 0; i < 100000; i++) {
    px = x;
    py = y;
    pz = z;

    dx = (z-b)*x - d*y;
    dy = d*x + (z-b)*y;
    dz = c + a*z - z*z*z/3 - (x*x + y*y)*(1 + e*z) + f*z*x*x*x;

    x += dx*dt;
    y += dy*dt;
    z += dz*dt;
    
    line(px*r, py*r - 50, pz*r, x*r, y*r - 50, z*r);
  }
}
