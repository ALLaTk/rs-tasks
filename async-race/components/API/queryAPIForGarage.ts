import { ValueType } from '../utilities/interface';
import { getApiQueryMethod, path, methods, url } from './queryAPIMethod';

export const getCar = async (id: number): Promise<ValueType> => {
  const response: Response = await fetch(`${url}${path.garage}/${id}`);
  const data: ValueType = await response.json();
  return data;
};

export const getCreateCar = async (name: string, color: string): Promise<void> => {
  await getApiQueryMethod(methods.create, path.garage, {
    name: name,
    color: color,
  });
};

export const getUpdateCar = async (name: string, color: string, id: number): Promise<void> => {
  await getApiQueryMethod(methods.update, `${path.garage}/${id}`, {
    name: name,
    color: color,
  });
};

export const deleteCar = async (name: string, color: string, id: number): Promise<void> => {
  await getApiQueryMethod(methods.delete, `${path.garage}/${id}`, {
    name: name,
    color: color,
  });
};
