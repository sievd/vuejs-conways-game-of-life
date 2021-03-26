const getRandomInteger = (min, max) => Math.floor(Math.random() * max) + min;

const getRGBColor = (getInteger = getRandomInteger) => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[getInteger(0, letters.length)];
  }
  return color;
};

export { getRGBColor };
