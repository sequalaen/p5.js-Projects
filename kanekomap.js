// noprotect

new p5();

// var a = random(0.14, 0.4);
// var d = random(1.5, 2.8);

// var a = 0.1753;
// var d = 1.7027;

// var a = 0.319;
// var d = 2.163;

// var a = 0.3825;
// var d = 2.483;

// var a = 0.2974;
// var d = 1.9627;

// var a = 0.3637;
// var d = 2.279;

// var a = 0.17781;
// var d = 1.87;

var a = 0.18451;
var d = 1.69574;

// var a = 0.27394;
// var d = 1.9267;

// var a = 0.23317;
// var d = 1.82763;

// var a = 2.5663;
// var d = 1.9027;
var x = 0.1;
var y = 0.1;
var r = 400;
var xshift = -100;
var yshift = -100;

function setup() {
  createCanvas(800, 800);
  background(255);
  
  print(a, d);
  
  noLoop();
}

function draw() {
  translate(width/2, height/2);
  
  stroke(0, 10);
  
  for (i = 0; i < 1000000; i++) {
    var xt = x;

    x = a*x + (1 - a)*(1 - d*y*y);
    y = xt;

    point(x*r + xshift, -y*r - yshift);
  }
}
