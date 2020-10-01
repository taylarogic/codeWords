let type

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(25);
  smooth();
  textAlign(CENTER);
  fill(255);

  type = [
    makeCurve({
      radius: 155,
      inc: -1,
      string: 'pseudo-religious or faux ideographic forms more akin to encoding and encryption',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 155,
      inc: 1,
      string: 'password',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 225,
      inc: -1,
      string: 'is a',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 225,
      inc: 0.5,
      string: 'Illegible logos and messages are an unprecedented brand of fantasy in the otherwise rationalised world of visual trademarks',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 295,
      inc: -0.5,
      string: 'The logo of an underground black metal band had to be illegible-asymmetrical maze of jagged forms.     a carefully fabricated stance of rejection of the ‘modern world.’ ',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
     makeCurve({
      radius: 360,
      inc: 0.5,
      string: 'Black metal logos are more structurally similar to the bar code and the CAPTCHA than to the swastika.     It bridges the accepted notion of the ‘trademark’ with the privately defined idea of the ‘password.’',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 360,
      inc: -0.5,
      string: 'The',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 295,
      inc: 0.5,
      string: 'logo',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 90,
      inc: 0.5,
      string: 'behind it',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 90,
      inc: 5,
      string: 'the visual personification of an idea of ‘Evil’ ',
      center: {
        x: width / 2,
        y: height / 2
      }
    })
  ]
}

function draw() {
  background(0);
  type.forEach(draw => draw())
  stroke(0,0,255);
  strokeWeight(2);
  textSize(25);
  textFont("Times");
  text("are you a robot?", mouseX, mouseY);
  
  textFont("Helvetica");
  noStroke()
  var words = [ "pure", "fucking", "armageddon" ];
  var word = random(words); 
  text(word,720,400); 
  noFill();
  if (mouseX > 670 && mouseX < 780 && mouseY > 335 && mouseY < 435) {
  fill(0,0,255);
 }
}

const makeCurve = ({
  radius,
  inc,
  string,
  center
}) => {
  let arcOffset = 0
  return () => {
    push()
    translate(center.x, center.y);
    var arcLength = (PI * radius) / 2 + arcOffset;
    var totalAngle = textWidth(string) / radius;
    for (var i = 0; i < string.length; i++) {
      let currentvar = string.charAt(i);
      var w = textWidth(currentvar);
      arcLength += w / 2;
      var theta = arcLength / radius - totalAngle / 2;
      push();
      rotate(theta);
      translate(0, -radius);
      fill(255, 80 + 20 * i);
      text(currentvar, 0, 0);
      pop();
      arcLength += w / 2;
    }

    arcOffset = arcOffset + inc % 360
    pop()
  }
}

function mousePressed() {

}
