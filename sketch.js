//The setup function only happens once
var arpita=0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(247,243,194); //an RGB color for the canvas' background
  //circle,
  stroke(100,255,51) // an RGB color for the circle's border
  fill(51,110,255,); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,arpita,50,50); // center of canvas, 20px dia
  arpita=arpita+1;
fill(243,39,58);
stroke(100,255,51,);
strokeWeight(2);
rect (100,100,90,mouseX);
}
