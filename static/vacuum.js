const lis = document.querySelectorAll('.vacuum li');
const container = document.querySelector('.vacuum');
const width = container.clientWidth;
const height = container.clientHeight;

const elements = [];

lis.forEach(li => {
  const x = Math.random() * (width - li.offsetWidth);
  const y = Math.random() * (height - li.offsetHeight);
  const vx = (Math.random() - 0.5) * 2;
  const vy = (Math.random() - 0.5) * 2;

  li.style.left = x + 'px';
  li.style.top = y + 'px';

  elements.push({ li, x, y, vx, vy });
});

function float() {
  elements.forEach(e => {
    e.x += e.vx;
    e.y += e.vy;

    if (e.x <= 0 || e.x >= width - e.li.offsetWidth) e.vx *= -1;
    if (e.y <= 0 || e.y >= height - e.li.offsetHeight) e.vy *= -1;

    e.vx += (Math.random() - 0.5) * 0.1;
    e.vy += (Math.random() - 0.5) * 0.1;

    e.vx = Math.max(Math.min(e.vx, 2), -2);
    e.vy = Math.max(Math.min(e.vy, 2), -2);

    e.li.style.left = e.x + 'px';
    e.li.style.top = e.y + 'px';
  });

  requestAnimationFrame(float);
}

float();
