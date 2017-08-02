const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = 4;
var dy = 4;

function animeX(x, dx) {
   this.x = x;
   this.dx = dy;

   this.create = function() {
      c.fillStyle = "rgba(0, 255, 0, 0.5)";
      c.fillRect(this.x, 300, 40, 40);
   };

   this.go = function() {
      if (this.x > innerWidth || this.x < 0) {
         this.dx = -this.dx;
      }
      this.x += this.dx;
      this.create();
   };
}

function animeY(y, dy) {
   this.y = y;
   this.dy = dy;

   this.create = function() {
      c.fillStyle = "rgba(0, 255, 0, 0.5)";
      c.fillRect(300, this.y, 40, 40);
   };

   this.go = function() {
      if (this.y > innerHeight || this.y < 0) {
         this.dy = -this.dy;
      }
      this.y += this.dy;
      this.create();
   };
}

var anime = new animeX(x, dx);

var animationY = new animeY(y, dy);

function animate() {
   window.requestAnimationFrame(animate);
   c.clearRect(0, 0, innerWidth, innerHeight);
   anime.go();
   animationY.go();
}
animate();
