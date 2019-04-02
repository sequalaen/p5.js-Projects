// noprotect

var a = 0.35;
var b = 0.3;
var w = 1;
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var t = 0;
var dt = 0.01;
var xt;

function setup() {
  createCanvas(800, 800);
  background(255);
  
  noLoop();
}

function draw() {
  translate(width/2, height/2);

  for (i = 0; i < 10000000; i++) {

    stroke(0, 5);

    px = x;
    py = y;

    xt = x;

    x += y*dt;
    y += (xt - pow(xt, 3) - a*y + b*cos(w*t))*dt;

    line(-(width/4)*px, -(height/4)*py, -(width/4)*x, -(height/4)*y);

    t += dt;

  }
}
