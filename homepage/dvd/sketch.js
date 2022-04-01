let x = 100
let y = 100
let xv = 7.3
let yv = 5.1
let color = "blue"

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);
  fill(color)
  rect(x, y, 30, 30);
  x = x + xv
  y = y + yv
  
  if (x > width || x < 0)
  {
    xv = -xv
    color = "red"
  }
  
  if (y > height || y < 0)
  {
    yv = -yv
    color = "yellow"
  }
  
  if (x == width & y == height || x == 0 & y == 0 || x == 0 & y == height || x == width & y == 0)
  {
    x = 400;
    y = 300;
  }
}