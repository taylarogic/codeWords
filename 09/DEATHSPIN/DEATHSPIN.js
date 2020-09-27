let typespin = [];
function makeTypespin() {
  let thisSpin = {x: mouseX,
                  y: mouseY,
                  speed: random(-0.5, 0.5)};
  return thisSpin;
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
 //for changing coloured bg
   //background(500+(sin(frameCount*0.01)*500),
   //128+(sin(frameCount*0.02)*128),
   //128+(sin(frameCount*0.03)*128)
   background(255,0,0);
   
  textAlign(CENTER, CENTER);
  for (let i = 0; i < typespin.length; i++) {
    push();
    translate(typespin[i].x, typespin[i].y);
    rotate(frameCount*typespin[i].speed);
    textSize(150);
    textFont("Times");
    text("DEATH", 0, 0);
    pop();
  }
}
function mousePressed() {
  typespin.push(makeTypespin());
}
