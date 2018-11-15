const stroke_weight = 3;
const num_of_squares = 10;
const speed = 5;

function setup()
{
  createCanvas(700, 700);
  
  rectMode(CENTER);
  
	stroke(255)
	strokeWeight(stroke_weight);
	noFill();
	colorMode(HSB,1000);
  
  strokeCap(ROUND);
  smooth();
}

function draw()
{
  background(128);
	translate(width/2,height/2);
	pattern(num_of_squares, width/2, millis()*speed/15705); // Just a random number (is it?)
}

function pattern(num, size, theta)
{
	rect(0, 0, size, size);
	pattern_recursive(num-1, size/((abs(cos(theta))+abs(sin(theta)))), theta);
}

function pattern_recursive(num, size, theta)
{
	if(num > 0)
	{
		rotate(theta);
    //stroke(num*1000/num_of_squares,1000,1000); // Colorful Variant
  	rect(0, 0, size-stroke_weight, size-stroke_weight);
		pattern_recursive(num-1, size/((abs(cos(theta))+abs(sin(theta)))), theta);
	}
}