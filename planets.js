const planets = document.getElementById("planets");
const ctx = planets.getContext("2d");

function planet(angle, pos) {
  rx = 300;
  ry = 300 * Math.sin(angle);
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
  ctx.strokeStyle = randomColor;
  ctx.fillStyle = randomColor;
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
    ctx.strokeStyle = randomColor;
    ctx.fillStyle = randomColor;
    ctx.arc(x + rx * Math.cos(pos), y + ry * Math.sin(pos), 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}

let angle = 0.25;
let pos = 0;
let angle2 = 0.25;
let pos2 = 0;
let center;
const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
const parentWidth = 820;
const parentHeight = 307;
function update() {
  planets.height = parentHeight;
  planets.width = parentWidth;

  center = [planets.width / 2, planets.height / 3];

  pos += 0.05;

  planet(angle, pos);

  requestAnimationFrame(update);
}
requestAnimationFrame(update);
