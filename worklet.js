
registerPaint('ripple', class {
  constructor() {
    console.log('hello from worklet');
  }
  static get inputProperties() { return ['--ripple-color', '--animation-tick', '--ripple-x', '--ripple-y', '--tick']; }
  paint(ctx, geom, properties) {
    const rippleColor = properties.get('--ripple-color').toString();
    const x = parseFloat(properties.get('--ripple-x').toString());
    const y = parseFloat(properties.get('--ripple-y').toString());
    let tick = parseFloat(properties.get('--animation-tick').toString());
    let maxtick = parseFloat(properties.get('--tick').toString());
    console.log('hello from worklet');
    if (tick < 0)
    tick = 0;
    if (tick > maxtick)
    tick = maxtick;
    
    ctx.fillStyle = rippleColor;
    ctx.globalAlpha = 1 - tick / maxtick;
    ctx.arc(
      x, y, // center
      geom.width * tick / maxtick,  // radius
      0, // startAngle
      2 * Math.PI //endAngle
      );
      console.log('hello from worklet');
    ctx.fill();
  }
});