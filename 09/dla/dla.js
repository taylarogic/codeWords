// Daniel Shiffman
var tree = [];
var walker;
var radius = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tree[0] = createVector(width/2, height/2);
}

function draw() {
  background(255);
  var walker = createVector(random(width), random(height));
  var stuck = false;
  while (!stuck) {
  for (var i = 0; i < tree. length; i++){
    var distance = p5.Vector.dist(walker, tree[i]);
    if (distance < radius * 2) {
      stuck = true;
      break;
    } 
   }
   walker.x += random(-2, 2);
   walker.y += random(-2, 2);
   walker.x = constrain(walker.x, 0, width);
   walker.y = constrain(walker.y, 0, height);
  }
  
  tree.push(walker);
  
  for (var i = 0; i < tree.length; i++) {
    strokeWeight(radius);
    stroke(0);
    point(tree[i].x, tree[i].y);
  }
}
