function setup() {
  createCanvas(600, 600);
  background(20, 10, 50);
}

function draw() {
  // HORNS
  noStroke();
  fill(0, 0, 225);
  triangle(200, 150, 200, 50, 275, 100);
  triangle(325, 100, 400, 50, 400, 150);
  
  // TAIL
  noFill();
  stroke(175);
  strokeWeight(4);
  bezier(50, 325, 150, 325, 75, 510, 220, 500);
  
  noStroke();
  fill(225, 225, 10);
  quad(20, 325, 40, 315, 50, 325, 40, 335);
  
  // BODY
  stroke(0);
  strokeWeight(5);
  fill(10);
  ellipse(300, 400, 225, 275);
  
  fill(100, 50);
  ellipse(300, 425, 180, 200);
  
  fill(255);
  ellipse(250, 400, 40, 40);
  ellipse(350, 400, 40, 40);
  
  // HEAD LIGHTNING DESIGN
  stroke(225, 225, 0);
  strokeWeight(1);
  line(290, 200, 290, 175);
  line(290, 175, 270, 155);
  line(270, 155, 290, 135);
  line(290, 135, 270, 115);
  line(310, 200, 310, 175);
  line(310, 175, 330, 155);
  line(330, 155, 310, 135);
  line(310, 135, 330, 115);
  
  // HEAD
  stroke(0);
  fill(0, 100);
  ellipse(300, 200, 250, 225);
  
  // EYES
  stroke(225, 225, 0);
  strokeWeight(5);
  fill (225, 0, 0);
  ellipse(250, 200, 50, 50);
  ellipse(350, 200, 50, 50);
  
  // MOUTH
  noStroke();
  fill(220);
  ellipse(300, 250, 80, 80);
  
  fill(200, 0, 0, 50);
  rect(280, 230, 40, 20, 7);
  
    //screw whiskers
    point(270, 240);
    point(270, 250);
    point(290, 240);
    point(290, 250);
    
  // FEET
  fill(240);
  ellipse(250, 520, 60, 45);
  ellipse(350, 520, 60, 45);
  
}

