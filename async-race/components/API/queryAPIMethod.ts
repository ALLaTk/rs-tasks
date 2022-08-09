import { ObjectValue, ValueType } from '../utilities/interface';

export const url = 'http://127.0.0.1:3000';

export const path: ObjectValue<string> = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
  limitCarsOnPageGarage: '?_limit=7&_page=',
  limitCarsOnPageWinners: '?_limit=10&_page=',
  started: '&status=started',
  stopped: '&status=stopped',
  drive: '&status=drive',
};

export const methods: ObjectValue<string> = {
  get: 'GET',
  create: 'POST',
  update: 'PUT',
  delete: 'DELETE',
  engineStatus: 'PATCH',
};

export const getApiQueryMethod = async (methodName: string, pathParam: string, body: ValueType): Promise<ValueType> => {
  const fullPath = `${url}${pathParam}`;
  const response: Response = await fetch(fullPath, {
    method: methodName,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const objCar: ValueType = await response.json();
  return objCar;
};
