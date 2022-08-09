import { ValueType } from '../utilities/interface';
import { getApiQueryMethod, path, methods, url } from './queryAPIMethod';

export const getParamRaceForStart = async (name: string, color: string, id: number): Promise<ValueType> => {
  const promise: ValueType = await getApiQueryMethod(
    methods.engineStatus,
    `${path.engine}?id=${id}${path.started}`,
    {
      name: name,
      color: color,
    },
    id
  );
  return promise;
};

export const sendStatusStop = async (name: string, color: string, id: number): Promise<ValueType> => {
  const promise: ValueType = await getApiQueryMethod(
    methods.engineStatus,
    `${path.engine}?id=${id}${path.stopped}`,
    {
      name: name,
      color: color,
    },
    id
  );
  return promise;
};

export const getStatusDrive = async (id: number) => {
  const response: Response = await fetch(`${url}${path.engine}?id=${id}${path.drive}`, {
    method: methods.engineStatus,
  });
  return response.status;
};
