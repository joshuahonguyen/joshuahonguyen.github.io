const planets = document.getElementById("planets");
const ctx = planets.getContext("2d");

function planet(angle, pos) {
  rx = 200;
  ry = 200 * Math.sin(.25);
  x = center[0];
  y = center[1];
  const magic = 0.551784; // Approximation of the circle with bezier curves
  const ox = rx * magic;
  const oy = ry * magic;

  ctx.beginPath();
  ctx.strokeStyle = "Purple";
  ctx.moveTo(x + rx, y);
  ctx.bezierCurveTo(x + rx, y - oy, x + ox, y - ry, x, y - ry);
  ctx.bezierCurveTo(x - ox, y - ry, x - rx, y - oy, x - rx, y);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "Red";
  ctx.fillStyle = "Blue";
  ctx.arc(x + rx * Math.cos(pos), y + ry * Math.sin(pos), 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "Purple";
  ctx.moveTo(x - rx, y);
  ctx.bezierCurveTo(x - rx, y + oy, x - ox, y + ry, x, y + ry);
  ctx.bezierCurveTo(x + ox, y + ry, x + rx, y + oy, x + rx, y);
  ctx.stroke();
  ctx.closePath();

  if (ry * Math.sin(pos) >= 0) {
    ctx.beginPath();
    ctx.strokeStyle = "Red";
    ctx.fillStyle = "Blue";
    ctx.arc(x + rx * Math.cos(pos), y + ry * Math.sin(pos), 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}

let increment = 0;
let angle = 0;
let pos = 0;
let center = [window.innerWidth / 2, window.innerHeight / 2];

function update() {
  planets.width = window.innerWidth;
  planets.height = window.innerHeight;
  center = [window.innerWidth / 2, window.innerHeight / 2];

  increment += 1;
  angle = ((increment % 360) + 360) % 360;
  pos += 0.05;

  planet(angle, pos);

  requestAnimationFrame(update);
}
requestAnimationFrame(update);
