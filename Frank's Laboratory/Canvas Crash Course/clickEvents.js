const canvas = document.querySelector("#canvas1");
const ctxt = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  drawCircle("hotpink", 30);
});

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  drawCircle();
});

function drawCircle(color, radius) {
  ctxt.fillStyle = color ?? "orangered";
  ctxt.beginPath();
  ctxt.arc(mouse.x, mouse.y, radius ?? 10, 0, Math.PI * 2);
  ctxt.fill();
}

function animate() {
  ctxt.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 3000);
}

animate();
// drawCircle();
