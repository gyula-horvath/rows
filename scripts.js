var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ch = canvas.height;
var cw = canvas.width;

var x = cw/40;
var y = ch/23;

var a = 50;

for (var squareCounter = 1; squareCounter<=5; squareCounter++) {
  context.fillStyle = 'orange';
  for (var i= 0; i < squareCounter; i++){
    context.fillRect(x, y, a, a);
    x+=55;
  }
  x-=i*55;
  y+=55;
}
