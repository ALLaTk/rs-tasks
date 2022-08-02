const getRandomColorlCar = (): string => {
  const color: string = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
  return color;
};

export default getRandomColorlCar;
