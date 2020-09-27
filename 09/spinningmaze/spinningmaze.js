let type
let typespin = [];
function makeTypespin() {
  let thisSpin = {x: mouseX,
                  y: mouseY,
                  speed: random(-0.5, 0.5)};
  return thisSpin;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(25);
  smooth();
  textAlign(CENTER);
  stroke(255);
  strokeWeight(1);

  type = [
    makeCurve({
      radius: 150,
      inc: -1,
      string: 'perhaps pseudo-religious or faux ideographic forms more akin to encoding',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 150,
      inc: 1,
      string: 'password',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 225,
      inc: 1,
      string: 'is a',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 225,
      inc: -0.5,
      string: 'Illegible logos and messages are an unprecedented brand of fantasy in the otherwise rationalised world of visual trademarks',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 295,
      inc: -0.5,
      string: 'The logo of an underground black metal band had to be illegible-asymmetrical maze of jagged forms. a carefully fabricated stance of rejection of the ‘modern world.’ ',
      center: {
        x: width / 2,
        y: height / 2
      }
    }),
    makeCurve({
      radius: 295,
      inc: 0.5,
      string: 'The logo',
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
      inc: 10,
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
  //translate(width / 1, height / 1);
  //let a = atan2(mouseY - height / 1, mouseX - width / 1);
  //rotate(a);
  type.forEach(draw => draw())
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
  typespin.push(makeTypespin());
}
