var canvas = document.getElementById("canvas");
var context= canvas.getContext("2d");
const circle ={
  x: 750,
  y: 650,
  size: 60,
  dx: 1,
  dy: 2,
};

 function ball1(){

        context.beginPath();
        context.arc(circle.x,circle.y,circle.size,0,Math.PI*2,false);
        context.fillStyle="#87CEEB";
        context.fill();
        context.stroke();
}

function animation1(){
       context.clearRect(0,0,canvas.width,canvas.height);
       ball1();
       circle.x += circle.dx;
       circle.y += -circle.dy;

 if (circle.y + circle.size >canvas.height || circle.y - circle.size < 0){
   circle.dy *= -1;

 if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
   circle.dx *= -1;
 }
 }

 requestAnimationFrame(animation1);
}

 animation1();
