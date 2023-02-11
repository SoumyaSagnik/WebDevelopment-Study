const canvas = document.querySelector("#canvas1");
const ctxt = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 0;

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
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
    hue++;
  }
});

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 15; i++) {
    particlesArray.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${hue}, 100%, 50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctxt.fillStyle = this.color;
    ctxt.beginPath();
    ctxt.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctxt.fill();
  }
}

function handleParticles() {
  particlesArray.forEach((particle, index) => {
    particle.update();
    particle.draw();
    if (particle.size <= 0.3) {
      particlesArray.splice(index, 1);
      index--;
    }
  });
}

function animate() {
  ctxt.clearRect(0, 0, canvas.width, canvas.height);
  //   ctxt.fillStyle = "rgba(0,0,0,0.02)";
  //   ctxt.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue += 0.5;
  requestAnimationFrame(animate);
}

animate();
