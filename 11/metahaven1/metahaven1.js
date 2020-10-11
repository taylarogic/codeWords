var paragraph = "Black metal’s illegible logos functionally correspond to the age of individualism; they are more structurally similar to the bar code and the CAPTCHA than to the swastika. Whereas the Third Reich’s symbols and propaganda tools were mass communication devices meant for entire populations, black metal logos- especially when combined with extreme rightist political views- have come to symbolise the hatred of more or less specifically named others by preventing the public from reading the symbol."; 
let sentence = "Illegible logos and messages are an unprecedented brand of fantasy in the otherwise rationalised world of visual trademarks. The logo of an underground black metal band had to be illegible-asymmetrical maze of jagged forms. ";
let words = paragraph.split(' ');
let x = 0;
let y = 0;
let rotation = 0;

let type
let typespin = [];

function makeTypespin() {
  let thisSpin = {x: mouseX,
                  y: mouseY,
                  speed: random(-1, 1)};
  return thisSpin;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); 
  angleMode(DEGREES);
  textSize(25);
  fill(0,0,255)
  noStroke();
}

function draw() {
  background(0);
  textFont("Arial");
  fill(255,0,255);
  noStroke();
  text("The logo is a password-behind it, a secret world is waiting.", 20,70);
  stroke(0,0,255);
  strokeWeight(3);
  for (let i = 0; i < typespin.length; i++) {
    push();
    translate(typespin[i].x, typespin[i].y);
    rotate(frameCount*typespin[i].speed);
    textSize(120);
    textFont("Times");
    stroke(0,0,255);
    scale(0.5, 5.0);
    text("DEATH", 0, 0);
    pop();
  }
  
  randomSeed(mouseX);
  translate(width / 2 - 100, height / 2);
  noStroke();
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    let letterWidth = textWidth(letter);
    fill(0,0,255);
    text(letter, 0, 0);
    translate(letterWidth, 0);
    if(letter == ' '){
    let direction = floor(random(0, 2));
      if (direction == 0) {
        rotate(45);
      }
      if (direction == 1) {
        rotate(-45);
      }
    }
  }
  fill(255);
  text(paragraph, int(windowWidth/3), windowHeight/4, int(windowWidth/3), windowHeight);
}

function mousePressed() {
typespin.push(makeTypespin());
}

function keyPressed() {
  if (key === ' ') {
    background(0);
 }
}
