import { ObjectValue, ObjectCar } from './interface';

export const valueCounts: ObjectValue<number> = {
  startPage: 1,
  maxCarsOnPage: 7,
  maxGenerateCars: 100,
};

export const initalValuesForInput: ObjectValue<string> = {
  modelCar: '',
  colorCar: '#c9a0a0',
};

export const valueButtonSelect: ObjectValue<ObjectCar> = {
  select: { name: '', color: '#c9a0a0', id: 0 },
};

export const activeClass = 'active';
