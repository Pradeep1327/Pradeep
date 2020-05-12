var canvas = document.getElementById("canvas");
var context= canvas.getContext("2d");
var r1=Math.floor((Math.random() * 5) + 20);
var y1 =Math.floor((Math.random()*10)+100);
var x1=Math.floor((Math.random()*10)+120);
var letters = '0123456789ABCDEF';
var color1 = '#';
for (var i = 0; i < 6; i++) {
color1 += letters[Math.floor(Math.random() * 16)];
}
var dx1=-1;
var dy1=-1;

var x2=0;
var y2=0;
var x3=0;
var y3=0;



var circleArray=[];

circleArray.push({x:x1+100, y:y1+80, r: r1+2, color:color1,dx:dx1+2, dy:dy1 });
circleArray.push({x:x1-50, y:y1-50, r: r1+8, color:color1, dx:dx1, dy:dy1});
circleArray.push({x:x1+300, y:y1+80, r: r1+4, color:color1,dx:dx1, dy:dy1+2 });
circleArray.push({x:x1+150, y:y1-20, r: r1-10, color:color1,dx:dx1+2, dy:dy1+2 });
circleArray.push({x:x1+300, y:y1+10, r: r1+3, color:color1,dx:dx1, dy:dy1 });
circleArray.push({x:x1+100, y:y1, r: r1+5, color:color1,dx:dx1+1, dy:dy1 });
circleArray.push({x:x1-50, y:y1+60, r: r1+7, color:color1,dx:dx1+2, dy:dy1+1 });
circleArray.push({x:x1+200, y:y1-30, r: r1+2, color:color1,dx:dx1, dy:dy1 });

 function ball1(i){


        context.beginPath();
        context.arc(circleArray[i].x,circleArray[i].y,circleArray[i].r,0,Math.PI*2,false);
        context.fillStyle=circleArray[i].color;
        context.fill();
        context.stroke();
}
function getDistance(x2,y3,x2,y2){
  var xDistance = x2 - x3;
  var yDistance = y2 - y3;
  return Math.sqrt(Math.pow(xDistance,2)+ Math.pow(yDistance,2))
}
var canvas=document.getElementById('canvas');
let sel={
  x: undefined,
  y: undefined};

window.addEventListener('click',bubble);
function bubble(e){
  sel.x = e.x;
 sel.y = e.y;

for(i=0; i<circleArray.length; i++){
if(getDistance(sel.x,sel.y, circleArray[i].x,circleArray[i].y)- circleArray[i].r < 0){
  circleArray.splice(i,1);
  console.log('jshs');
}}}
function animation1(){


       context.clearRect(0,0,canvas.width,canvas.height);

       for(i=0; i<circleArray.length; i++){
        ball1(i);
       circleArray[i].x += circleArray[i].dx;
       circleArray[i].y += -circleArray[i].dy;

       if (circleArray[i].y + circleArray[i].r >canvas.height || circleArray[i].y - circleArray[i].r < 0){
         circleArray[i].dy *= -1;

       if (circleArray[i].x + circleArray[i].r > canvas.width || circleArray[i].x - circleArray[i].r < 0){
         circleArray[i].dx *= -1;
}
}}




}

var stopWatch;
var s =0;
  var ms =0;
  var t;
  let count = 0;
        function startTime() {
      requestAnimationFrame(animation1);
      if(ms>98){
        ms=0
	s++
      }else{
          ms+=1}

  if(ms<10){
    document.getElementById('display').innerHTML=  "Time:" + s + ":" + "0" + ms;}
  else{
    document.getElementById('display').innerHTML=  "Time:"+s+":"+  ms;}


    t = setTimeout(startTime, 7);

}

 animation1(i);
 bubble();




 function stop(){

 clearTimeout(t);

}

function resume(){
startTime();
}

function restart(){
  location.reload();
}
