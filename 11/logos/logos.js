let nike;
let mcdonalds;
let chanel;
let apple;

let particles = [];
let np = 200;
let logos = [];

function preload() {
  nike = loadImage("data/nikelogo.png");
  mcdonalds = loadImage("data/mcdonaldslogo.png");
  chanel = loadImage("data/chanellogo.png");
  apple = loadImage("data/applelogo.png");
  
  logos.push(nike, mcdonalds, chanel, apple);
} 
function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
for(let i = 0; i<np; i++){
    let r = int(random(logos.length));
    let par = new Particle(random(width), random(height), random(10, 50), logos[r]);
    particles.push(par);
  }
  
}

function draw() {
  background(0);
  let mx = mouseX == 0 ? -1 : mouseX;
  let my = mouseY == 0 ? -1 : mouseY;
  
  let m = createVector(mx, my);
  for(let i =0; i<particles.length; i++){
   particles[i].draw();
  
   particles[i].update(m);
  }

}

class Particle{
 constructor(x, y, size, img){
   this.x = x;
   this.y = y;
   this.vx = random(-1, 1);
   this.vy = random(-1, 1);
   this.size = size;
   
   this.pos = createVector(x, y);
   this.rotation = 0;
   this.lastRotation = 0;
   this.easing = 0.05;
   this.img = img;
   this.lifespan = random(30,500);
   this.life = 0;

 }
  
  draw(){
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    image(this.img, 0,0, this.size, this.size);
    pop();
  }
  
  update(m){
    
   this.x += this.vx;
   this.y += this.vy;
   
   this.rotation = atan2(this.y - m.y, this.x - m.x) - PI/2;
   this.rotation = this.lastRotation + (this.rotation - this.lastRotation) * this.easing;
   let dir = {x: m.x - this.x, y: m.y - this.y};

   let dn = normalize(dir);
    
   this.vx += dn.x * 0.05 ;
   this.vy += dn.y * 0.05 ;
    
    
   let d = dist(this.x, this.y);
    
    if(d < 1) {
     this.reset();
    }
    
    this.px = this.x;
    this.py = this.y;
    
    this.lastRotation = this.rotation;
    
    if(this.life > this.lifeSpan){
      this.life = 0;
      
      this.reset();
    }
  }
  
  reset(){
    let sideOrCeiling = random(1.0) < 0.5 ? true: false;
     
    let leftOrRight = 0;
    let topOrBottom = 0;
     if(sideOrCeiling){
        leftOrRight = random(1.0) < 0.5 ? -width : width;
        leftOrRight += random(width);
        topOrBottom = random(height);
     } else {
       leftOrRight = random(width);
       topOrBottom = random(1.0) < 0.5 ? -height : height;
       topOrBottom += random(height);
     }
     
     this.x = leftOrRight;
     this.y = topOrBottom;
     this.vx = random(-1, 1);
     this.vy = random(-1, 1);
  }
  
}
  
function normalize(v){
  let len = length(v);
  v.x /= len;
  v.y /= len;
  return v;
}

function length(v){
  return Math.sqrt(v.x * v.x + v.y * v.y);
}
