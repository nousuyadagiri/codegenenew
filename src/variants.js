export const fadeIn = (direction = "up", delay = 0) => {
  const initial = {
    opacity: 0,
    x: 0,
    y: 0,
  };

  switch (direction) {
    case "up":
      initial.y = 40;
      break;
    case "down":
      initial.y = -40;
      break;
    case "left":
      initial.x = 40;
      break;
    case "right":
      initial.x = -40;
      break;
    default:
      break;
  }

  return {
    hidden: initial,
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        stiffness: 100,
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
