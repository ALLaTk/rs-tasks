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
