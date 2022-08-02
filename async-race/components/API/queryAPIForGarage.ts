import { getApiQueryMethod, path, method } from './queryAPIMethod';

export const getCreateCar = async (name: string, color: string): Promise<void> => {
  await getApiQueryMethod(method.create, path.garage, {
    name: name,
    color: color,
  });
};

export const getUpdateCar = async (name: string, color: string, id: number): Promise<void> => {
  await getApiQueryMethod(
    method.update,
    path.garage,
    {
      name: name,
      color: color,
    },
    id
  );
};

export const getDeleteCar = async (name: string, color: string, id: number): Promise<void> => {
  await getApiQueryMethod(
    method.delete,
    path.garage,
    {
      name: name,
      color: color,
    },
    id
  );
};
