var canvas = document.getElementById("canvas");
var context= canvas.getContext("2d");
var r1=Math.floor((Math.random() * 50) + 30);
var y1 =Math.floor((Math.random()*200)+100);
var x1=Math.floor((Math.random()*200)+120);
var letters = '0123456789ABCDEF';
var color1 = '#';
for (var i = 0; i < 6; i++) {
color1 += letters[Math.floor(Math.random() * 16)];
}
var dx=0;
var dy=0;



var circleArray=[];



circleArray.push({x:x1, y:y1, r: r1, color:color1});

 function ball1(){
       for(i=0; i<circleArray.length; i++){

        context.beginPath();
        context.arc(circleArray[i].x,circleArray[i].y,circleArray[i].r,0,Math.PI*2,false);
        context.fillStyle=circleArray[i].color;
        context.fill();
        context.stroke();
}}

function animation1(){
  var x=5;
  var y=0;
       context.clearRect(0,0,canvas.width,canvas.height);
       ball1();

       circleArray[i].x += circleArray[i].dx;
       circleArray[i].y += -circleArray[i].dy;

       if (circleArray[i].y + circleArray[i].r >canvas.height || circleArray[i].y - circleArray[i].r < 0){
         circleArray[i].dy *= -1;

       if (circleArray[i].x + circleArray[i].r > canvas.width || circleArray[i].x - circleArray[i].r < 0){
         circleArray[i].dx *= -1;
}}
 requestAnimationFrame(animation1);


}

 animation1();
