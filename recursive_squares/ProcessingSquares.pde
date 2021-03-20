int strokeWeight = 3;
int numOfSquares = 12;
float speed = 5;

int numFrame;

void setup()
{
    numFrame = 1;

    size(700, 700, P2D);
    
    rectMode(CENTER);
    colorMode(HSB, TWO_PI*100);
    // noStroke();
    // noFill();
    strokeWeight(strokeWeight);
    stroke(50);
}

void draw()
{
    background(50);
    translate(width/2, height/2);
    squaresRecursive(700, numFrame*speed/600, numOfSquares, numOfSquares);

    if (numFrame*speed/600 <= TWO_PI)
    {
        saveFrame("img_####.png");
    }

    numFrame += 1;
}

void squaresRecursive(float size, float angle, int n, int nmax)
{
    if (n > 0)
    {
        float newSize = size/((abs(cos(angle))+abs(sin(angle))));

        fill((angle*(nmax+1-n) % TWO_PI)*100.0, TWO_PI*100, TWO_PI*100, TWO_PI*100);
        rotate(angle);
        rect(0, 0, newSize, newSize);
        squaresRecursive(newSize, angle, n-1, nmax);
    }
}