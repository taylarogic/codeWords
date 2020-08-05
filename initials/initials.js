function setup() {
createCanvas (500,1000);
background (0,0,0);
}


function draw() {
  fill ((mouseX+mouseY)/1,255-mouseX/2,255-mouseY/2);
  rect (220,220,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (220,165,50,50);
  fill ((mouseX+mouseY)/5,255-mouseX/6,255-mouseY/2);
  rect (220,275,50,50);
  fill ((mouseX+mouseY)/5,255-mouseX/6,255-mouseY/2);
  rect (275,165,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (165,165,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (220,330,50,50);
  
  fill ((mouseX+mouseY)/1,255-mouseX/2,255-mouseY/2);
  rect (165,500,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (165,555,50,50);
  fill ((mouseX+mouseY)/5,255-mouseX/6,255-mouseY/2);
  rect (165,610,50,50);
  fill ((mouseX+mouseY)/5,255-mouseX/6,255-mouseY/2);
  rect (165,665,50,50);
  fill ((mouseX+mouseY)/5,255-mouseX/6,255-mouseY/2);
  rect (220,500,50,50);
  fill ((mouseX+mouseY)/1,255-mouseX/2,255-mouseY/2);
  rect (220,610,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (275,555,50,50);
  fill ((mouseX+mouseY)/5,255-mouseX/6,255-mouseY/2);
  rect (275,665,50,50);


}
