const generateVariants = (
  delay: number | null,
  x: number | null,
  y: number | null,
) => {
  return {
    visible: {
      overflow: 'visible',
      opacity: 1,
      y: y || 0,
      x: x || 0,
      transition: {
        type: 'tween',
        duration: 1.25,
        delay: delay || 0,
      },
    },
    hidden: {
      overflow: 'visible',
      opacity: 0,
      x: x ? x - 25 : 0,
      y: y ? y - 25 : 0,
    },
  };
};

export default generateVariants;
