var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillStyle = "rgb(53,53,53)";
c.fillRect(0, 0, canvas.width, canvas.height);
console.log("hi");

var dx = 3;
var dy = 3;

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
      c.fillStyle = "rgb(0, 255, 0)";
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
setInterval(function animate() {
   c.fillStyle = "rgba(53, 53, 53, 0.25)";
   // window.requestAnimationFrame(animate);
   c.fillRect(0, 0, innerWidth, innerHeight);

   for (var i = 0; i < 4; i++) {
      Xpixels[i].go();
      Ypixels[i].go();
   }
}, 20);
animate();
