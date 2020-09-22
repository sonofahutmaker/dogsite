// JavaScript Document
var dog;
var dog_num;
var dog_name = 'all_dogs/dog0.jpg';
var x1, y1, x2, y2, x3, y3 = 0;
var r1, g1, b1 = 255;
var i = 0;
var circ = 0;
var xpos, ypos = 0;
var x,y = 0;
var r2,g2,b2 = 0;
var time = 0;
var xr, yr;
var con = 0;
var ax, ay;
var rad = 0;
var strk = false;
var xhat = 0;
var yhat = 0;
var r3, g3, b3;
var fll;
var txtsize;
var pipex, pipey = 0;
var col1,col2,col3=0;
var bubpos = 0;
var bub = 0;
var musx, musy = 0;
var musfill = false;
var state = false;
var tize= false;
var tiefill = false;
var tiex,tiey = 0;
var monox, monoy = 0;
var red,green,blue = 0
var conpos = 0
var tim2 = 0;
var conw, conh;

function preload(){
	get_dog();
	dog = loadImage(dog_name);
}

function setup() {
	createCanvas(windowWidth * .5, windowHeight);
	x = 0;
	y = 0;
	r2 = 0;
	g2 = 0;
	b2 = 0;
	time = 0;
	xr = 0;
	yr = 0;
	ax = 0;
	ay = 0;
	r3 = 0;
	g3 = 0;
	b3 = 0;
	fll = false;
	txtsize = 0;
	conw = 0;
	conh = 0;
	tim2 = 0;
}

function draw() {
	image(dog,0,0,1000,1000);
	//party hat - 1
	fill(random(255),random(255),255);
	triangle(x1,y1,x2,y2,x3,y3);
	circle(x3,y3-5,10);
	//clown afro
  	noStroke();
	fill(255,0,0);
	afro();
	//tophat
	tophat();
	noFill();
	vary();
	ant();
	//cowboyhat
	if (time < 255) {
  	r3 = r3 + 1;
  	} 
	if (time >= 255) {
    r3 = r3 -1; 
  	if (time == 510){
      time = 0;
    	}
  	}
	time = time +1;
	yeehaw();
	//pipe
	pipe();
	//mustache
	mustache();
	if (time%50 == 0){
		if (state == false){
		  state = true;
		}
		else {
		  state = false;
		}
 	}
	//tie
	if (time%50 == 0){
		if (tize == false){
		  tize = true;
		}
		else {
		  tize = false;
		}
  	}
  	tie();
	//monocle
	monocle();
	//confetti
	if (tim2%50 != 0 && conw == 10){
  		confetti();
    }
	tim2 = tim2 + 1;
}

function get_dog(){
	dog_num = floor(random(700)).toString();
	dog_name = "all_dogs/dog" + dog_num + ".jpg";
}

function mouseClicked(){
	if (keyIsPressed){
		if (key == '1'){ //party hat
			x1 = mouseX;
			y1 = mouseY;
			x2 = mouseX + 40;
			y2 = mouseY;
			x3 = mouseX + 20;
			y3 = mouseY - 80;
		}
		if (key == '2'){ //afro
			circ = 20;
			xpos = mouseX;
			ypos = mouseY;
		}
		if (key == '3'){//tophat
			xr = mouseX;
			yr = mouseY;
			con = 1;
		}
		if (key == '4'){//antenae
			ax=mouseX;
			ay=mouseY;
			rad = 20;
			strk = true;
		}
		if (key == '5'){//cowboyhat
			xhat=mouseX;
			yhat=mouseY;
			fll = true;
			txtsize = 40;
		}
		if (key == '6'){//pipe
			pipex = mouseX;
			pipey = mouseY;
			bub = 8;
		}
		if (key == '7'){//mustache
			musx=mouseX;
			musy=mouseY;
			musfill = true;
		}
		if (key == '8'){//tie
			tiefill = true;
			tiex = mouseX;
			tiey = mouseY;
		}
		if (key == '9'){//monocle
			monox = mouseX;
			monoy = mouseY;
		}
		if (key == '0'){//confetti
			conw = 10;
			conh = 35;
			tim2 = 0;
		}
	}
}

function mouseDragged(){
	if (keyIsPressed){
		if (key == '1'){ //party hat
			x1 = mouseX;
			y1 = mouseY;
			x2 = mouseX + 40;
			y2 = mouseY;
			x3 = mouseX + 20;
			y3 = mouseY - 80;
		}
		if (key == '2'){ //afro
			circ = 20;
			xpos = mouseX;
			ypos = mouseY;
		}
		if (key == '3'){//tophat
			xr = mouseX;
			yr = mouseY;
			con = 1;
		}
		if (key == '4'){//antenae
			ax=mouseX;
			ay=mouseY;
			rad = 20;
			strk = true;
		}
		if (key == '5'){//cowboyhat
			xhat=mouseX;
			yhat=mouseY;
			fll = true;
			txtsize = 40;
		}
		if (key == '6'){//pipe
			pipex = mouseX;
			pipey = mouseY;
			bub = 8;
		}
		if (key == '7'){//mustache
			musx=mouseX;
			musy=mouseY;
			musfill = true;
		}
		if (key == '8'){//tie
			tiefill = true;
			tiex = mouseX;
			tiey = mouseY;
		}
		if (key == '9'){//monocle
			monox = mouseX;
			monoy = mouseY;
		}
		if (key == '0'){//confetti
			conw = 10;
			conh = 35;
			tim2 = 0;
		}
	}
}

function mousePressed(){
	if (keyIsPressed){
		if (key == '0'){//confetti
				conw = 10;
				conh = 35;
				tim2 = 0;
			}
	}
}

function afro(){
  circle(xpos,ypos,circ);
  circle(xpos + 13, ypos - 7, circ);
  fill(0,0,255);
  circle(xpos - 13, ypos + 36, circ);
  fill(255,0,0);
  circle(xpos - 13, ypos + 13, circ);
  fill(0,0,255);
  circle(xpos + 25, ypos-10, circ);
  fill(255,0,0);
  circle(xpos + 36, ypos - 15, circ);
  fill(0,0,255);
  circle(xpos + 50, ypos, circ);
  fill(255,0,0);
  circle(xpos + 75, ypos - 15, circ);
  fill(0,0,255);
  circle(xpos + 78, ypos -5, circ);
  fill(255,0,0);
  circle(xpos + 80, ypos, circ);
  fill(0,0,255);
  circle(xpos + 90, ypos + 15, circ);
  fill(255,0,0);
  circle(xpos + 92, ypos +30, circ);
  fill(0,0,255);
  circle(xpos + 88, ypos + 35,circ);
  fill(255,0,0);
  circle(xpos + 75, ypos + 45, circ);
  fill(0,0,255);9
  circle(xpos + 70, ypos + 35, circ);
  fill(255,0,0);
  circle(xpos + 50, ypos + 45, circ);
  fill(0,0,255);
  circle(xpos + 37, ypos + 35, circ);
  fill(255,0,0);
  circle(xpos + 25, ypos + 40, circ);
  fill(0,0,255);
  circle(xpos + 13, ypos + 45, circ);
  fill(255,0,0);
  circle(xpos + 5, ypos + 13, circ);
  fill(0,0,255);
  circle(xpos + 10, ypos + 20, circ);
  fill(255,0,0)
  circle(xpos + 20, ypos + 17, circ);
  fill(0,0,255);
  circle(xpos + 30, ypos + 17, circ);
  fill(255,0,0);
  circle(xpos + 40, ypos + 22, circ);
  fill(0,0,255);
  circle(xpos+ 50, ypos +13, circ);
  fill(255,0,0);
  circle(xpos + 75, ypos + 15, circ);
}

function tophat(){
  if (con){
	  fill(0);
  }	else {
  	  noFill();
  }
  beginShape();
  vertex(xr,yr);
  bezierVertex(xr,yr,xr + 70,yr + 5,xr+123,yr+41);
  vertex(xr+85,yr + 102);
  bezierVertex(xr+85,yr+52,xr+175,yr+133,xr+14,yr+124);
  bezierVertex(xr+14,yr+124,xr -19,yr+108,xr-48,yr+85);
  bezierVertex(xr-48,yr+75,xr-32,yr+64,xr-10,yr+65);
  endShape();
}

function ant(){
  fill(100,255,0);
  if (strk) {
	stroke(0);
	  strokeWeight(1);
  }
  else{
	  noStroke();
  }
  line(ax,ay,ax+10,ay+60);
  circle(ax,ay,rad);
  line(ax+80,ay,ax+70,ay+60);
  circle(ax+80,ay,rad);
}
function vary(){
	if (time % 50 == 0){
		if (rad == 20){
			 rad = 10
		}
		else if (rad == 10){
			rad = 20
		}
  }
}

function yeehaw(){
  noStroke();
  if (fll){
	  fill(110,47,3);
  }
  else{
	  noFill();
  }
  beginShape();
  vertex(xhat,yhat);
  bezierVertex(xhat,yhat,xhat+25,yhat+15,xhat+48,yhat+32);
  bezierVertex(xhat+48,yhat+32,xhat+56,yhat+31,xhat+56,yhat+31);
  vertex(xhat+56,yhat+31);
  endShape();
  beginShape();
  vertex(xhat+56,yhat+31);
  bezierVertex(xhat+56,yhat+31,xhat+62,yhat-8,xhat+80,yhat-46);
  bezierVertex(xhat+88,yhat-50,xhat+113,yhat-42,xhat+155,yhat-46);
  bezierVertex(xhat+166,yhat-40,xhat+176,yhat-13,xhat+183,yhat+22)
  endShape();
  beginShape();
  vertex(xhat+183,yhat+22);
  bezierVertex(xhat+183,yhat+22,xhat+191,yhat+32,xhat+240,yhat)
  bezierVertex(xhat+223,yhat+69,xhat+121,yhat+119,xhat+20,yhat+35);
  bezierVertex(xhat+5,yhat+22,xhat,yhat+10,xhat,yhat);
  endShape();
  textSize(txtsize);
  fill(r3, g3, b3);
  text('YEE HAW',xhat+75,yhat,75);
}

function pipe(){
  fill(0);
  noStroke();
  beginShape();
  vertex(pipex,pipey);
  bezierVertex(pipex,pipey,pipex+2,pipey-2,pipex+20,pipey-4);
  bezierVertex(pipex+20,pipey-4,pipex+35,pipey-4,pipex+44,pipey+1);
  vertex(pipex+44,pipey+23);
  bezierVertex(pipex+44,pipey+23,pipex+40,pipey+18,pipex+88,pipey-2);
  bezierVertex(pipex+88,pipey-2,pipex+104,pipey-5,pipex+121,pipey-5);
  vertex(pipex+121,pipey-5);
  vertex(pipex+127,pipey-2);
  vertex(pipex+123,pipey+1);
  vertex(pipex+121,pipey);
  bezierVertex(pipex+121,pipey,pipex+98,pipey+5,pipex+77,pipey+26);
  bezierVertex(pipex+77,pipey+26,pipex+46,pipey+47,pipex+17,pipey+49);
  bezierVertex(pipex+17,pipey+49,pipex+6,pipey+43,pipex,pipey+31);
  vertex(pipex,pipey);
  endShape();
  fill(255);
  ellipse(pipex+21,pipey+2,35,9)
  draw_bubs();
}

function colorz(){
  col1 = random(255);
  col2 = 0;
  col3 = noise(bubpos)*255;
}
function move(){
	if (bubpos > 0){
		bubpos = bubpos -1;
	}
	else{
		bubpos = pipey;
	}
}

function draw_bubs(){
	colorz();
  	fill(col1,col2,col3);
  	circle(pipex+5,bubpos,bub);
	fill(col2,col1,col3);
	circle(pipex+20,bubpos-25,bub);
  	fill(col2,col3,col1);
  	circle(pipex+25,bubpos+25,bub);
	move();
}

function mustache(){
  if (musfill){
  	fill(0);
  }
  else{
	  noFill();
  }
  if (state){
	  beginShape();
	  vertex(musx,musy);
	  bezierVertex(musx,musy,musx-4,musy+5,musx-8,musy+4);
	  bezierVertex(musx-8,musy+4,musx-3,musy+26,musx+18,musy+36);
	  bezierVertex(musx+18,musy+36,musx+42,musy+14,musx+59,musy-5);
	  bezierVertex(musx+59,musy-5,musx+66,musy-6,musx+77,musy-3);
	  bezierVertex(musx+77,musy-3,musx+85,musy+4,musx+94,musy-5);
	  bezierVertex(musx+94,musy-5,musx+103,musy-6,musx+113,musy-4);
	  bezierVertex(musx+113,musy-4,musx+127,musy+14,musx+153,musy+35);
	  bezierVertex(musx+153,musy+35,musx+175,musy+23,musx+178,musy+4);
	  bezierVertex(musx+178,musy+4,musx+175,musy+7,musx+169,musy+2);
	  bezierVertex(musx+169,musy+2,musx+175,musy-4,musx+182,musy+1);
	  bezierVertex(musx+182,musy+1,musx+184,musy+19,musx+139,musy+53);
	  bezierVertex(musx+139,musy+53,musx+111,musy+49,musx+85,musy+33);
	  bezierVertex(musx+85,musy+33,musx+54,musy+51,musx+9,musy+48);
	  bezierVertex(musx+9,musy+48,musx-11,musy+29,musx-13,musy+4);
	  bezierVertex(musx-13,musy+4,musx-5,musy-4,musx,musy);
	  endShape();
  }
  else {
	  beginShape();
	  vertex(musx+27,musy-4);
	  bezierVertex(musx+27,musy-4,musx+24,musy+1,musx+18,musy+44);
	  bezierVertex(musx+18,musy+44,musx+12,musy+16,musx+24,musy+34);
	  bezierVertex(musx+18,musy+36,musx+42,musy+14,musx+59,musy-5);
	  bezierVertex(musx+59,musy-5,musx+66,musy-6,musx+77,musy-3);
	  bezierVertex(musx+77,musy-3,musx+85,musy+4,musx+94,musy-5);
	  bezierVertex(musx+94,musy-5,musx+103,musy-6,musx+113,musy-4);
	  bezierVertex(musx+113,musy-4,musx+127,musy+14,musx+153,musy+35);
	  bezierVertex(musx+153,musy+35,musx+162,musy+21,musx+157,musy+1);
	  bezierVertex(musx+157,musy+1,musx+152,musy+4,musx+147,musy-1);
	  bezierVertex(musx+147,musy-1,musx+153,musy-5,musx+159,musy-3);
	  bezierVertex(musx+159,musy-3,musx+168,musy+21,musx+159,musy+43);
	  bezierVertex(musx+139,musy+53,musx+111,musy+49,musx+85,musy+33);
	  bezierVertex(musx+85,musy+33,musx+54,musy+51,musx+9,musy+48);
	  bezierVertex(musx+9,musy+48,musx+5,musy+23,musx+23,musy-8);
	  bezierVertex(musx+23,musy-8,musx+26,musy-7,musx+27,musy-4);
	  endShape();
  }
}

function tie(){
	noStroke();
	if (tize==true){
		if (tiefill){
			fill(0,255,0);
		}
		beginShape()
		vertex(tiex,tiey);
		vertex(tiex+51,tiey);
		vertex(tiex+41,tiey+41);
		vertex(tiex+64,tiey+209);
		vertex(tiex+24,tiey+241);
		vertex(tiex-14,tiey+209);
		vertex(tiex+13,tiey+41);
		vertex(tiex,tiey);
		endShape();
	}
	else{
		if(tiefill){
			fill(0,0,255);
		}
		beginShape();
		vertex(tiex,tiey);
		vertex(tiex+51,tiey);
		vertex(tiex+41,tiey+41);
		vertex(tiex+79,tiey+293);
		vertex(tiex+24,tiey+325);
		vertex(tiex-31,tiey+293);
		vertex(tiex+13,tiey+41);
		vertex(tiex,tiey);
		endShape();
	}
}

function monocle(){
	noFill();
	stroke(0);
	strokeWeight(5);
	circle(monox,monoy,25);
	circle(monox+25,monoy+10,5);
	for (let i = 0; i < 10; i++){
		circle(monox+25,monoy+10+(i*5),2);
	}
}

function confetti(){
	red = random(255);
	green = random(255);
	blue = random(255);
	conpos = random(1000);
	fill(red,green,blue);
	rect(conpos,tim2,conw,conh);
}

