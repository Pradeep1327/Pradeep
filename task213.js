var canvas = document.getElementById("canvas");
var context= canvas.getContext("2d");
var letters = '0123456789ABCDEF';
var color1 = '#';
for(i=0;i<6;i++){
color1 += letters[Math.floor(Math.random() * 16)]
}
let x2=0;
let x3=0;
let y2=0;
let y3=0;



var circleArray=[];
for(i=0; i<4; i++){

   var r1=Math.floor((Math.random() * 20) + 15);
   var y1=Math.floor((Math.random()*150)+50);
   var x1=Math.floor((Math.random()*400)+50);
   var dx1=Math.floor((Math.random()*0)+1);
   var dy1=Math.floor((Math.random()*0)+1)

   if(!i==0){
     for(let j=0; j<circleArray.length; j++)
     
   }

  circleArray.push({x:x1,y:y1, r:r1, color:color1,dx:dx1, dy:dy1 });

}




 function ball1(i){

   for (i=0; i<circleArray.length;i++){
           context.beginPath();
           context.arc(circleArray[i].x,circleArray[i].y,circleArray[i].r,0,Math.PI*2,false);
           context.fillStyle=circleArray[i].color;
           context.fill();
           context.stroke();
}}
function getDistance(x2,y2,x3,y3){

   let xDistance = (x2-300) - (x3-300);
   let yDistance = (y2-80) - (y3-80);
  return Math.sqrt(Math.pow(xDistance,2)+ Math.pow(yDistance,2))
}
var canvas=document.getElementById('canvas');
let sel={
  x: undefined,
  y: undefined};


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

window.addEventListener('click',function(e){
  sel.x = e.clientX;
  sel.y = e.clientY;
  console.log("hello1");
for(i=0; i<circleArray.length; i++){

if(getDistance(e.clientX,e.clientY, circleArray[i].x,circleArray[i].y) < circleArray[i].r + circleArray[i].r){

  circleArray.splice(i,1);
  requestAnimationFrame(animation1);
}

}})


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




 function stop(){

 clearTimeout(t);

}

function resume(){
startTime();
}

function restart(){
  location.reload();
}
function score(){
localStorage.setItem('getScore', JSON.stringify(t));

var obj = localStorage.getItem('getScore');
console.log('High Score: ', JSON.parse(obj));

}

score();
