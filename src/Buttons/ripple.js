const rippleEffect = ({ event, fromCenter }) => {
  const btn = event.currentTarget;
  let x = btn.offsetWidth / 2;
  let y = btn.offsetHeight / 2;
  /* istanbul ignore else */
  if (!fromCenter) {
    x = event.pageX - btn.offsetLeft;
    y = event.pageY - btn.offsetTop;
  }

  const duration = 500;
  let animationFrame;
  let animationStart;

  const animationStep = (timestamp) => {
    if (!animationStart) {
      animationStart = timestamp;
    }

    const frame = timestamp - animationStart;
    /* istanbul ignore else */
    if (frame < duration) {
      const easing = (frame / duration) * (2 - frame / duration);

      const circle = `circle at ${x}px ${y}px`;
      const color = `rgba(0, 0, 0, ${0.3 * (1 - easing)})`;
      const stop = `${90 * easing}%`;

      btn.style.backgroundImage = `radial-gradient(${circle}, ${color}, ${stop}, transparent ${stop})`;

      animationFrame = window.requestAnimationFrame(animationStep);
    } else {
      btn.style.backgroundImage = 'none';
      window.cancelAnimationFrame(animationFrame);
    }
  };

  animationFrame = window.requestAnimationFrame(animationStep);
};

export default rippleEffect;
