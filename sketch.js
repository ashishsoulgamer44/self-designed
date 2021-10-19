const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backgroundimg;
var snow1;
var snow;



function preload(){
  backgroundimg = loadImage("desert.jpg");

  
  }
  

function setup() {
 var canvas = createCanvas(1200,700);








}





function draw() {
 
  background(backgroundimg);  
  
  drawSprites();
}