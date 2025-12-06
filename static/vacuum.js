const lis = document.querySelectorAll('.vacuum li');
const container = document.querySelector('.vacuum');
const width = container.clientWidth;
const height = container.clientHeight;

lis.forEach(li => {
  li.style.left = Math.random() * (width - li.offsetWidth) + 'px';
  li.style.top = Math.random() * (height - li.offsetHeight) + 'px';
});

function float() {
  lis.forEach(li => {
    const x = parseFloat(li.style.left);
    const y = parseFloat(li.style.top);

    let dx = (Math.random() - 0.5) * 4;
    let dy = (Math.random() - 0.5) * 4;

    let newX = Math.min(width - li.offsetWidth, Math.max(0, x + dx));
    let newY = Math.min(height - li.offsetHeight, Math.max(0, y + dy));

    li.style.left = newX + 'px';
    li.style.top = newY + 'px';
  });

  requestAnimationFrame(float);
}

float();
