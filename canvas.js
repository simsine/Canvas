
var canvas = document.querySelector('canvas');
var image = document.querySelector('img')
console.log(canvas);

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function reSize() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

var ctx = canvas.getContext("2d");

// Generates cubes with a random size and color //
/*
for (i = 0; i < 150; i++) {
  s = Math.floor(Math.random()*25) + 50
  x = Math.floor(Math.random()*canvas.width)
  y = Math.floor(Math.random()*canvas.height)
  ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
  ctx.fillRect(x, y, s, s);
}
*/

// DvD logo //
var x = canvas.width/2;
var y = canvas.height/2;

var vx = 2;
var vy = 1;

function animate() {
  requestAnimationFrame(animate);
  
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  
  ctx.drawImage(image,x,y)
  
  if (x < 0 || x > window.innerWidth - 150) {
    vx = -vx;
  }
  else if (y < 0 || y > window.innerHeight - 90) {
    vy = -vy;
  }
  
  console.log(x,y);
  
  x = x + vx;
  y = y + vy; 
}

animate();