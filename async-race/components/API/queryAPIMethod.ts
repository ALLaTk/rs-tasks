import { GenerateCar, ObjectValue } from '../utilities/interface';

export const url = 'http://localhost:3000';

export const path: ObjectValue<string> = {
  garage: '/garage',
};

export const method: ObjectValue<string> = {
  create: 'POST',
  update: 'PUT',
  delete: 'DELETE',
};

export const getApiQueryMethod = async (
  methodName: string,
  pathParam: string,
  body: GenerateCar,
  id?: number
): Promise<GenerateCar> => {
  let fullPath = `${url}${pathParam}`;
  if (id) fullPath += `/${id}`;
  const response: Response = await fetch(fullPath, {
    method: methodName,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const car: GenerateCar = await response.json();
  return car;
};
