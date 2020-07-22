// JavaScript Document
var dog;

function setup() {
	createCanvas(400,400);
	dog = loadImage('all_dogs/dog10.jpg')
}
function draw() {
	image(dog,0,0,400,400);
}