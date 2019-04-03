// noprotect

var p = 3;
var o = 2.7;
var r = 1.7;
var c = 2;
var e = 9;
var x = 1;
var y = 1;
var z = 0;
var q = 20;
var dt = 0.002;
var dx, dy, dz, px, py, pz;

function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  
  noLoop();
}

function draw() {
  rotateX(radians(20));
  
  stroke(0, 5);
  
  for (i = 0; i < 1000000; i++) {
    px = x;
    py = y;
    pz = z;

    dx = y - p*x + o*y*z;
    dy = r*y - x*z + z;
    dz = c*x*y - e*z;

    x += dx*dt;
    y += dy*dt;
    z += dz*dt;

    line(px*q - 10, py*q, pz*q, x*q - 10, y*q, z*q);
  }
}
