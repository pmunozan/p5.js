const w = 480;
const h = 480;
const cols = 10;
const rows = 10;
//let paleta = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"];
//let paleta = ["#f2eced","#b4baca","#7285a4","#8e6f58","#b56839"];
//let paleta = ["#22013b","#02566f","#02716f","#03a3a0","#03a2b8"];
//let paleta = ["#579500","#59ae98","#079fd7","#e7c8ff","#ffcfe4"];
//let paleta = ["#a67c00", "#bf9b30", "#ffbf00", "#ffcf40", "#ffdc73"];
//let paleta = ["#CECECE", "#797979", "#E5E5E5", "#D4D4D4", "#C5C5C5"];
//let paleta = ["#F7961B","#F6366D","#A631E0","#F573C6","#2A0F9C","#00BCAB"];//SSS ,"#EEE5B8",
//let paleta =["#C93032","#4E9FA6", "#2D445E","#531E15","#FBA702", "#997F55", "#D94309", "#132547"];//repus
//let paleta = ["#C5C6FF", "#B7FDC8", "#FFE782", "#FDC79C", "#FEA3D4"];//doodles
//let paleta =["#FD98B4", "#90CEF0", "#222222", "#FFFFFF", "#90CEF0", "#90CEF0"];//cool cats
//let paleta =["#00507F", "#1EDAE9","#00507F", "#1EDAE9", "#FF00C7", "#01FFA5"];//capsule
//let paleta = ["#8A00FF", "#DF00FF","#FF0047", "#FF8500", "#FFFE00", "#A8FF02"];//squiglle
//let paleta = ["#969658","#969658", "#5D7F93", "#F5B403", "#A04936", "#DC7111"];//creatures
let paleta =["#EEA853", "#52056C", "#1B6492", "#A95916", "#DA8D3C","#FF8CCB", "#6F208C", "#6F208C", "#6F208C", "#6F208C", "#15709E", "#15709E", "#E89E49", "#B9B95C", "#031E59"];//encryoptas 3930

function setup() {
	createCanvas(w, h);
	colorMode(HSB, 360, 100, 100, 100);
	rectMode(CENTER);
	background(0, 1, 96, 100);
//  background("#EEE5B8")
  background("#FFE4FB");
//background(256);
	noFill();

	// '2' means margin
	const cw = width / (cols + 2);
	const ch = height / (rows + 2);

	translate(cw * 1.5, ch * 1.5);
	for (c = 0; c < cols; c++) {
		for (r = 0; r < rows; r++) {
		  
			drawCell(c * cw, r * ch, cw, ch);
		}
	}
}

/**
* drawCell : draws randomly distorted rectangles.
*/
function drawCell(_cx, _cy, _cw, _ch) {

	const rectMax = 10;
	const distort = 0.1;

	for (let rectCnt = 0; rectCnt < rectMax; rectCnt++) {
  
		// calculates corner points of the distorted rectangle
		const hW = _cw * rectCnt / rectMax / 2;
		const hH = _ch * rectCnt / rectMax / 2;
		const points = [{
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
		];

		stroke(random(paleta));
    //  stroke(paleta[rectCnt])
		strokeWeight(random(4));
		beginShape();
		// you need five points to draw a rectangle with vertex
      
		for (let corner = 0; corner < 5; corner++) {
			vertex(points[corner % 4].x, points[corner % 4].y);
		}
		endShape();
	}
}
