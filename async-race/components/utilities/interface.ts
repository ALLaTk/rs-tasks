export interface ObjectCar {
  name: string;
  color: string;
  id: number;
}

export interface GenerateCar {
  name: string;
  color: string;
}

export interface ObjectValue<T> {
  [key: string]: T;
}
export interface RaceParam {
  velocity: number;
  distance: number;
}

export interface ValueType {
  [key: string]: number | string | boolean;
}
export interface ObjArrsCar {
  arrCarsElements: HTMLDivElement[];
  arrCarsObjects: ObjectCar[];
  arrAllCars: Array<[HTMLDivElement, ObjectCar]>;
}

export enum StatusError {
  brokeDown = 500,
}

export enum ValueCounts {
  numberGenerateCars = 100,
}

export enum InitalValuesForInput {
  modelCar = '',
  colorCar = '#c9a0a0',
}

export const valueButtonSelect: ObjectValue<ObjectCar> = {
  select: { name: '', color: '#c9a0a0', id: 0 },
};

export const isFilled = <T>(v: PromiseSettledResult<T>): v is PromiseFulfilledResult<T> => v.status === 'fulfilled';

export const objArrsCar: ObjArrsCar = {
  arrCarsElements: [],
  arrCarsObjects: [],
  arrAllCars: [],
};
