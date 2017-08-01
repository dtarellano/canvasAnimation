const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

var x = 200;
var dx = 4;
const anime = () => {
   c.clearRect(0, 0, innerWidth, innerHeight);
   requestAnimationFrame(anime);
   c.fillStyle = "rgba(0, 255, 0, 0.5)";
   c.fillRect(x, 300, 10, 10);
   if (x > innerWidth || x < 0) {
      dx = -dx;
   }
   x += dx;
};

anime();
