//copywright Micah Theriot
var x;
var yRed = 0;
var yBlue = 0;
var yGreen = 0;
var img;

function preload() {
  img = loadImage("images/scopeTest.jpg");
}
function setup() {
  blendMode(ADD);
  createCanvas(1024, 3860);
  background(0);
  image(img, 0, 0);             //printImage at top
  loadPixels();                 //initialize array of pixel data

  redScope(1);                  // scope1

  greenScope(2);                // scope2

  blueScope(3);                 // scope3

  comboScopeLargeDots(4);                // scope4


}

//------------------------Functions---------------------------
function redScope(slot) {
  space = 773 * slot;
  x = 0;
  noFill();
  stroke(255);
  rect(0, space, 1024, 768);

  fill(255,0,0);
  noStroke();
  for(var i = 0; i < 3141568; i+=4){
      yRed = map(pixels[i],0,255,space + 768,space);
      // yRed = 255 - pixels[i];
      ellipse(x,yRed,1);
      x++;
      if (x == 1024) {x = 0}
  }
}
function greenScope(slot) {
  space = 773 * slot;
  x = 0;
  noFill();
  stroke(255);
  rect(0, space, 1024, 768)

  fill(0, 255,0);
  noStroke();
  for(var i = 1; i < 3141568; i+=4){
      yGreen = map(pixels[i],0,255,space + 768,space);
      // yRed = 255 - pixels[i];
      ellipse(x,yGreen,1);
      x++;
      if (x == 1024) {x = 0}
  }
}
function blueScope(slot) {
  space = 773 * slot;
  x = 0;
  noFill();
  stroke(255);
  rect(0, space, 1024, 768)

  fill(0,0,255);
  noStroke();

  for(var i = 2; i < 3141568; i+=4){
      yBlue = map(pixels[i],0,255,space + 768,space);
      // yRed = 255 - pixels[i];
      ellipse(x,yBlue,1);
      x++;
      if (x == 1024) {x = 0}
  }
}
function comboScope(slot) {
  space = 773 * slot;
  x = 0;
  noFill();
  stroke(255);
  rect(0, space, 1024, 768)

  noStroke();
  for(var i = 0; i < 3141568; i+=4){
      yRed = map(pixels[i],0,255,space + 768,space);
      yGreen = map(pixels[i + 1],0,255,space + 768,space);
      yBlue = map(pixels[i + 2],0,255,space + 768,space);
      fill(255,0,0);
      ellipse(x,yRed,1);
      fill(0,255,0);
      ellipse(x,yGreen,1);
      fill(0,0,255);
      ellipse(x,yBlue,1);
      x++;
      if (x == 1024) {x = 0}
  }
}
function comboScopeLargeDots(slot) {
  space = 773 * slot;
  x = 0;
  noFill();
  stroke(255);
  rect(0, space, 1024, 768)

  noStroke();
  for(var i = 0; i < 3141568; i+=4){
      yRed = map(pixels[i],0,255,space + 768,space);
      yGreen = map(pixels[i + 1],0,255,space + 768,space);
      yBlue = map(pixels[i + 2],0,255,space + 768,space);
      fill(255,0,0);
      ellipse(x,yRed,6);
      fill(0,255,0);
      ellipse(x,yGreen,6);
      fill(0,0,255);
      ellipse(x,yBlue,6);
      x++;
      if (x == 1024) {x = 0}
  }
}
