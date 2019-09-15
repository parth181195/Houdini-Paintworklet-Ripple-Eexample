buttonList = document.querySelectorAll('.ripple');
let x, y;
let start = performance.now();
console.log(buttonList)
buttonList.forEach(button => {
  button.addEventListener('click', event => {
    button.classList.add('animating');
    x = event.offsetX;
    y = event.offsetY;
    start = performance.now();
    let style = window.getComputedStyle(button);
    let maxTick = style.getPropertyValue('--tick');
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
})