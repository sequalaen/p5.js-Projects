// noprotect

var xmin = -0.7;
var xmax = 0.2;
var ymin = -0.3;
var ymax = 0.9;
var zmin = -1;
var zmax = 1;
var c = 0;
var a, x0, y0, z0;

function coeffs(nums) {
	var cs = [];
	
	for (i = 0; i < nums; i++) {
		cs.push(round(random(-1, 1)*1000)/1000);
	}
	
	return cs;
}

function quartic3d(iters) {
	var x = x0;
	var y = y0;
	var z = z0;
	var xn, yn, zn;
	
	for (j = 0; j < iters; j++) {
		
		xn = a[0] + a[1]*x + a[2]*y + a[3]*z + a[4]*x*x + a[5]*x*y + a[6]*x*z + a[7]*y*y + a[8]*y*z + a[9]*z*z + a[10]*x*x*x + a[11]*x*x*y + 
			a[12]*x*x*z + a[13]*x*y*y + a[14]*x*y*z + a[15]*x*z*z + a[16]*y*y*y + a[17]*y*y*z + + a[18]*y*z*z + a[19]*z*z*z + a[20]*x*x*x*x + 
			a[21]*x*x*x*y + a[22]*x*x*x*z + a[23]*x*x*y*y + a[24]*x*x*y*z + a[25]*x*x*z*z + a[26]*x*y*y*y + a[27]*x*y*y*z + a[28]*x*y*z*z + 
			a[29]*x*z*z*z + a[30]*y*y*y*y + a[31]*y*y*y*z + a[32]*y*y*z*z + a[33]*y*z*z*z + a[34]*z*z*z*z;
		yn = a[35] + a[36]*x + a[37]*y + a[38]*z + a[39]*x*x + a[40]*x*y + a[41]*x*z + a[42]*y*y + a[43]*y*z + a[44]*z*z + a[45]*x*x*x + a[46]*x*x*y + 
			a[47]*x*x*z + a[48]*x*y*y + a[49]*x*y*z + a[50]*x*z*z + a[51]*y*y*y + a[52]*y*y*z + + a[53]*y*z*z + a[54]*z*z*z + a[55]*x*x*x*x + 
			a[56]*x*x*x*y + a[57]*x*x*x*z + a[58]*x*x*y*y + a[59]*x*x*y*z + a[60]*x*x*z*z + a[61]*x*y*y*y + a[62]*x*y*y*z + a[63]*x*y*z*z + 
			a[64]*x*z*z*z + a[65]*y*y*y*y + a[66]*y*y*y*z + a[67]*y*y*z*z + a[68]*y*z*z*z + a[69]*z*z*z*z;
		zn = a[70] + a[71]*x + a[72]*y + a[73]*z + a[74]*x*x + a[75]*x*y + a[76]*x*z + a[77]*y*y + a[78]*y*z + a[79]*z*z + a[80]*x*x*x + a[81]*x*x*y + 
			a[82]*x*x*z + a[83]*x*y*y + a[84]*x*y*z + a[85]*x*z*z + a[86]*y*y*y + a[87]*y*y*z + + a[88]*y*z*z + a[89]*z*z*z + a[90]*x*x*x*x + 
			a[91]*x*x*x*y + a[92]*x*x*x*z + a[93]*x*x*y*y + a[94]*x*x*y*z + a[95]*x*x*z*z + a[96]*x*y*y*y + a[97]*x*y*y*z + a[98]*x*y*z*z + 
			a[99]*x*z*z*z + a[100]*y*y*y*y + a[101]*y*y*y*z + a[102]*y*y*z*z + a[103]*y*z*z*z + a[104]*z*z*z*z;
		
		x = xn;
		y = yn;
		z = zn;
	}
	
	if (abs(x) < 1 && abs(y) < 1 && abs(z) < 1) {
		c++
	}
	
	point(map(x, xmin, xmax, 0, width), map(y, ymin, ymax, height, 0));
}

function setup() {
	createCanvas(5760, 5760);
	
	noLoop();
}

function draw() {
	while (c < 100) {
		background(255);
		
		c = 0
		
		a = coeffs(105);
		
		a = [0.259,0.533,-0.203,-0.313,-0.368,0.23,-0.686,-0.91,-0.127,0.579,-0.758,-0.345,0.857,0.458,-0.75,-0.351,0.508,0.628,-0.181,-0.578,0.83,-0.724,-0.486,-0.783,-0.773,-0.523,-0.431,0.866,0.607,0.219,-0.747,-0.175,-0.582,0.897,-0.431,0.221,0.381,0.724,0.418,-0.859,1,0.935,-0.931,0.506,0.93,-0.614,-0.818,0.509,-0.135,-0.186,-0.212,-0.229,-0.387,-0.829,-0.803,0.425,-0.725,-0.53,0.649,-0.093,-0.296,-0.764,0,0.387,-0.166,0.134,0.647,0.386,0.832,-0.141,0.162,-0.523,0.956,0.231,0.122,-0.521,0.057,0.234,-0.733,-0.79,-0.223,0.488,0.168,0.613,0.142,-0.877,-0.876,-0.259,-0.759,0.589,0.278,0.559,-0.515,-0.974,0.017,-0.371,0.282,0.638,-0.579,0.803,-0.966,0.176,-0.136,0.336,0.171];
		
		print(a);

		stroke(0, 20);

		for (i = 0; i < 10000000; i++) {
			x0 = random(xmin, xmax);
			y0 = random(ymin, ymax);
			z0 = random(zmin, zmax);

			quartic3d(100);
		}
	}
}
