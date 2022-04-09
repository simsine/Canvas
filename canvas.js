var canvas = document.querySelector('canvas');
var image = document.querySelector('img')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function reSize() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

var ctx = canvas.getContext("2d");

// Generates cubes with a random size and color //
// This is just a random test i did //
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
  // Set start point to middle of canvas //
var x = canvas.width/2;
var y = canvas.height/2;
  // Function for giving either a negative or positive sign //
function randomSign(x){
  if (Math.random() < 0.5){
    return -x
  }
  else{
    return x
  }
}
  // Set velocities with random directions//
var vx = randomSign(2);
var vy = randomSign(1);

  //Animate function //
function animate() {
  requestAnimationFrame(animate);
  
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  
  ctx.drawImage(image,x,y)
  
  if (x < 0 || x > window.innerWidth - image.width) {
    vx = -vx;
  }
  else if (y < 0 || y > window.innerHeight - image.height) {
    vy = -vy;
  }
  
  console.log(x,y);
  
  x = x + vx;
  y = y + vy; 
}
// Calling the animate function //
animate();