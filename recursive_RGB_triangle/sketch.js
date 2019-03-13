// Prefer the use powers of 2
// (I use this as reference for everything,
// doing multiple divisions by 2)
const CANVASSIZE = 512;
const X = CANVASSIZE/2;
const Y = CANVASSIZE/2;
const TRISIZE = CANVASSIZE/2;
const DEPTH = 4;
// Change this at will. I used CANVASSIZE = 512 originally,
// and this makes upscaling easier.
const UNISIZE = CANVASSIZE/512;

// 2 recursive functions are used: one for the
// normal equilateral triangle (recursiveTri), and
// one for the inverted one (recursiveTriReversed).

function setup() {
  // Setup the canvas
  canvas = createCanvas(CANVASSIZE, CANVASSIZE);
  background(0);
  colorMode(RGB, TRISIZE);
  noStroke();
  
  // Start the recursive function(s)
  recursiveTri(DEPTH, X, Y, TRISIZE*2);
  
  // Draw a white line around the big triangle
  stroke(TRISIZE);
  strokeWeight(UNISIZE*3);
  noFill();
  equiTri(X,Y,TRISIZE);
  
  // Uncomment to save the image:
	// saveCanvas(canvas, 'github_pic', 'png');
}

function recursiveTri(n, x, y, side) {
  if(n > 0) {
    // Each component is related to the distance
    // to one of the big triangle's vertex
    fill(TRISIZE - dist(x,y,X,						Y - TRISIZE*sqrt(3)/3),
         TRISIZE - dist(x,y,X - TRISIZE/2,Y + TRISIZE*sqrt(3)/6),
         TRISIZE - dist(x,y,X + TRISIZE/2,Y + TRISIZE*sqrt(3)/6));
    
    // Radius of the circumcircle
    let r = side/(4*sqrt(3));
    
    // Draw an equilateral triangle in the middle
  	equiTri(x, y, side/2);

    // And then call one recursive function to
    // one subdivision of the bigger triangle
    recursiveTriReverse(n-1, x, y, side/2);
    recursiveTri(n-1, x,							 y - r, 	side/2);
    recursiveTri(n-1, x - r*sqrt(3)/2, y + r/2,	side/2);
    recursiveTri(n-1, x + r*sqrt(3)/2, y + r/2,	side/2);
  }
}

function recursiveTriReverse(n, x, y, side) {
  if(n > 0) {
    // Each component is related to the distance
    // to one of the big triangle's vertex
    fill(TRISIZE - dist(x,y,X,						Y - TRISIZE*sqrt(3)/3),
         TRISIZE - dist(x,y,X - TRISIZE/2,Y + TRISIZE*sqrt(3)/6),
         TRISIZE - dist(x,y,X + TRISIZE/2,Y + TRISIZE*sqrt(3)/6));
    
    // Radius of the circumcircle
    let r = side/(4*sqrt(3));
    
    // Draw a reverse equilateral triangle in the middle
  	equiTriReverse(x, y, side/2);

    // And then call one recursive function to
    // one subdivision of the bigger triangle
    recursiveTri(n-1, x, y, side/2);
    recursiveTriReverse(n-1, x,								y + r, 	 side/2);
    recursiveTriReverse(n-1, x - r*sqrt(3)/2, y - r/2, side/2);
    recursiveTriReverse(n-1, x + r*sqrt(3)/2, y - r/2, side/2);
  }
}

// Draw an equilateral triangle pointing up by
// it's center and size of the sides
function equiTri(x, y, side) {
	// Based off of equilateral triangle's properties
  triangle(x, y - side*sqrt(3)/3,
           x - side/2, y + side*sqrt(3)/6,
           x + side/2, y + side*sqrt(3)/6);
}

// Draw an equilateral triangle pointing down by
// it's center and size of the sides
function equiTriReverse(x, y, side) {
	// Based off of equilateral triangle's properties
  triangle(x, y + side*sqrt(3)/3,
           x - side/2, y - side*sqrt(3)/6,
           x + side/2, y - side*sqrt(3)/6);
}