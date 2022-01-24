const w = 480;
const h = 480;
const cols = 4;
const rows = 4;

	
  const radius = w/ (cols+2) /2;
//let paleta = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"];
let paleta = ["#f2eced","#b4baca","#7285a4","#8e6f58","#b56839"];
//let paleta = ["#22013b","#02566f","#02716f","#03a3a0","#03a2b8"];
//let paleta = ["#579500","#59ae98","#079fd7","#e7c8ff","#ffcfe4"];
function setup() {
	createCanvas(w, h);
	colorMode(HSB, 360, 100, 100, 100);
	rectMode(CENTER);
	//background(0, 1, 96, 100);
  background(1);
	noFill();
// '2' means margin
	const cw = width / (cols + 2)+5; //480 /6 = 80 ancho
  //TODO 5 a pelo
	const ch = height / (rows + 2); //480 /6 = 80 alto


	translate(cw * 1.5- cols*5, ch * 1.5); //centra el dibujo
  //TODO 5 a pelo
  
  
	for (c = 0; c < cols; c++) {
		for (r = 0; r < rows; r++) {
		  
			drawCell(c * cw, r * ch, cw, ch); //0, 0, 80, 80
		}
	}
}

/**
* drawCell : draws randomly distorted rectangles.
*/
function drawCell(_cx, _cy, _cw, _ch) {

	const rectMax = 10; //numero de cuadrados
	const distort = 0; //distorsion

	for (let rectCnt = 0; rectCnt < rectMax; rectCnt++) {
  
		// calculates corner points of the distorted rectangle
		const hW = _cw * rectCnt / rectMax / 2; //
		const hH = _ch * rectCnt / rectMax / 2;
  
	/*	const points = [{
				x: _cx - (1 + random(-1, 1) * distort) * hW,
				y: _cy - (1 + random(-1, 1) * distort) * hH
			},
			{
				x: _cx + (1 + random(-1, 1) * distort) * hW,
				y: _cy - (1 + random(-1, 1) * distort) * hH
			},
			{
				x: _cx + (1 + random(-1, 1) * distort) * hW,
				y: _cy + (1 + random(-1, 1) * distort) * hH
			},
			{
				x: _cx - (1 + random(-1, 1) * distort) * hW,
				y: _cy + (1 + random(-1, 1) * distort) * hH
			},
		];*/

    
   //  const radius = min([width, height])/2;
     let points = generatePolygonPoints(_cx,_cy,radius-5*rectCnt ,6);
      //TODO radius a pelo
		stroke(random(paleta));
		strokeWeight(random(3));
		beginShape();
		// you need five points to draw a rectangle with vertex
      
		/*for (let corner = 0; corner < 5; corner++) {
			vertex(points[corner % 4].x, points[corner % 4].y);
		}*/
      
      for(let i = 0; i < 7; i++){
    vertex(points[i][0], points[i][1]);
  }
		endShape();
    //  alert(points);
	}
  
  function generatePolygonPoints(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  let pointsHexagon = [];
    const distort = 4;
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius - (1 + random(-1, 1) * distort)*radius/100;
    let sy = y + sin(a) * radius - (1 + random(-1, 1) * distort)*radius/100;
    append(pointsHexagon, [sx, sy]);

  }
    
  return pointsHexagon;
}
}
