import { brandsCars, modelsCars } from './modelsCars';

const getRandomModelCar = (models: Array<string>): string => {
  const index: number = Math.floor(Math.random() * models.length);
  return models[index];
};

const getRandomFullNameCar = (): string => {
  return `${getRandomModelCar(brandsCars)} ${getRandomModelCar(modelsCars)}`;
};

export default getRandomFullNameCar;
