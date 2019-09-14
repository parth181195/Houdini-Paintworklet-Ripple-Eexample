button = document.querySelector('.target');
let x, y;
let start = performance.now();

button.addEventListener('click', event => {
  button.classList.add('animating');
  x = event.offsetX;
  y = event.offsetY;
  start = performance.now();
  let style = window.getComputedStyle(button);
  let maxTick = style.getPropertyValue('--tick');
  console.log(maxTick);
  requestAnimationFrame(function animate(now) {
    count = Math.floor(now - start)
    button.style.cssText = `--ripple-x: ${x}; --ripple-y: ${y}; --animation-tick: ${count};`;
    if (count > maxTick) {
      button.classList.remove('animating');
      button.style.cssText = `--animation-tick: 0`;
      return;
    }
    requestAnimationFrame(animate);
  })
})