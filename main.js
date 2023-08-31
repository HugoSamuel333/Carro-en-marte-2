canvas = document.getElementById ("canvas");
ctx = canvas.getContext("2d");
fresa = "mars.jpg"
coco = "rover.png";
rover_x = 40;
rover_y = 100;


function marte (){
chocolate = new Image();
chocolate.onload = imagenn;
chocolate.src=fresa;
uva = new Image();
uva.onload = lluvia;
uva.src=coco;
}


function imagenn(){
ctx.drawImage(chocolate,0,0,canvas.width,canvas.height);

}
function lluvia (){
ctx.drawImage(uva,rover_x,rover_y,100,100)
}
window.addEventListener("keydown",mover);
function mover(r){
var manzana = r.keyCode;
if(manzana == "38"){
Up();
}
if(manzana == "40"){
Down();
}
if(manzana == "37"){
Left()
}
if(manzana == "39"){
Right();
}
}
function Up(){
if(rover_y >= 0){
rover_y = rover_y - 10;
imagenn();
lluvia();
}
}
function Down(){
if(rover_y <= 700){
rover_y = rover_y + 10;
imagenn();
lluvia();
}
}
function Left(){
if(rover_x >= 0){
rover_x = rover_x - 10;
imagenn();
lluvia();
}
}
function Right(){
if(rover_x <= 400){
rover_x = rover_x + 10;
imagenn();
lluvia();
}
}