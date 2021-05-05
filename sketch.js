var canvas, backgroundImage , background;
//var database;



 function preload(){
  backgroundImage = loadImage("bg.jpg")
 }

function setup(){
  canvas = createCanvas(windowWidth , windowHeight);
  //database = firebase.database();
  Form = new Form();
}


function draw(){
  background(backgroundImage);
  Form.display();
}
