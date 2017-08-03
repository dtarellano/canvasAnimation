const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

var dx = 4;
var dy = 4;

// GLOBAL X PIXELS
function animeX(dx, y) {
   this.dx = dx;
   this.y = y;
   var xx = 30;

   this.create = function() {
      c.fillStyle = "rgba(0, 255, 0, 0.5)";
      c.fillRect(xx, this.y, 30, 30);
   };

   this.go = function() {
      if (xx + 30 > innerWidth || xx <= 0) {
         this.dx = -this.dx;
      }
      xx += this.dx;
      this.create();
   };
}

// GLOBALE Y PIXELS
function animeY(dy, x) {
   this.dy = dy;
   this.x = x;
   var yy = 30;

   this.create = function() {
      c.fillStyle = "rgba(0, 255, 0, 0.5)";
      c.fillRect(this.x, yy, 30, 30);
   };

   this.go = function() {
      if (yy + 30 > innerHeight || yy < 0) {
         this.dy = -this.dy;
      }
      yy += this.dy;
      this.create();
   };
}
// CREATING PIXELS
var Xpixels = [];
var Ypixels = [];

function arrayGenerator(array, pixel) {
   for (var i = 0; i < 4; i++) {
      var x = Math.random() * innerWidth;
      var y = Math.random() * innerHeight;
      array.push(new pixel(dx, y));
   }
}

arrayGenerator(Xpixels, animeX);
arrayGenerator(Ypixels, animeY);
// DISPLAY PIXELS
function animate() {
   window.requestAnimationFrame(animate);
   c.clearRect(0, 0, innerWidth, innerHeight);

   for (var i = 0; i < 4; i++) {
      Xpixels[i].go();
      Ypixels[i].go();
   }
}
animate();
