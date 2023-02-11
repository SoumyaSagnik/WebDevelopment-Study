const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = "white";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "rgba(255,255,255,.7)";

  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
});

ctx.fillStyle = "white"; //inside color
ctx.strokeStyle = "red"; // border color
ctx.lineWidth = 5;
ctx.shadowBlur = 5;
ctx.shadowColor = "rgba(255,255,255,.7)";
ctx.beginPath(); // Place your paintbrush in JS and start drawing
// didn't have to do above line with rect as ctxt.fillRect. Here arc can be anything.
ctx.arc(100, 100, 50, 0, Math.PI * 2); //x-cord as center point, y-cord as center point, radius, start-angle, end-angle (360 given here)
ctx.stroke(); // border draw
ctx.fill(); // inside draw
console.log(ctx);
