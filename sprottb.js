// noprotect

var a = 0.4;
var b = 1.2;
var c = 1;
var x = 0.1;
var y = 0;
var z = 0;
var r = 60;
var dt = 0.003;
var dx, dy, dz, px, py, pz;

function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  
  noLoop();
}

function draw() {
  for (i = 0; i < 100000; i++) {
    px = x;
    py = y;
    pz = z;

    dx = a*y*z;
    dy = x - b*y;
    dz = c - x*y;

    x += dx*dt;
    y += dy*dt;
    z += dz*dt;

    line(px*r, py*r, pz*r, x*r, y*r, z*r);
  }
}
