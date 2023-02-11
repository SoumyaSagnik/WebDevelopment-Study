const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = "white"; // default is black
  ctx.fillRect(10, 10, 50, 50); // x-cord start, y-cord start, width, height
});

// initial drawing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "white";
ctx.fillRect(10, 10, 50, 50);
