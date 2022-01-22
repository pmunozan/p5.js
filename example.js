function setup() {
  const size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  colorMode(HSL, 1);
}

let n;
//let paleta = ["#f2eced","#b4baca","#7285a4","#8e6f58","#b56839"];
//let paleta = ["#22013b","#02566f","#02716f","#03a3a0","#03a2b8"];
//let paleta = ["#579500","#59ae98","#079fd7","#e7c8ff","#ffcfe4"];
let paleta = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"];
const ancho = 0.001;



function draw() {
  scale(width, height);
  background(0);
  stroke(1);
  strokeWeight(0.002);

  n = 5;
  const depth = 2;

  drawFractal(0.5, 0.5, 0.4, depth);
}

function polar(angle, radius) {
  return {
    x: cos(angle * TWO_PI) * radius,
    y: sin(angle * TWO_PI) * radius,
  }
}

function drawFractal(x, y, size, depth) {
  
  for (let i = 0; i < n; i++) {
    
  
    const f = i / n;
    const angle = f + 0.25;

    if (depth > 0) {
      const scale = 0.5;
      const s = size * scale;
      const p = polar(angle, s);
      
      drawFractal(x + p.x, y + p.y, s, depth - 1);
    } else {
      const p1 = polar(angle, size);
      const p2 = polar(angle + 1 / n, size);
       stroke(paleta[i]);
      strokeWeight(ancho*(i+1));
      //["#f2eced","#b4baca","#7285a4","#8e6f58","#b56839"]
      line(x + p1.x, y + p1.y, x + p2.x, y + p2.y);
    }
  }
}
