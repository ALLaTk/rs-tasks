import { countPageWinners } from '../events/controlPage';
import { ObjectValue, ValueType } from '../utilities/interface';
import { getApiQueryMethod, path, methods, url } from './queryAPIMethod';

export const getAllWinners = async (sortValue: string, sortParam: string): Promise<ValueType[]> => {
  const response: Response = await fetch(
    `${url}${path.winners}?_sort=${sortValue}&_order=${sortParam}&${path.limitCarsOnPageWinners}${countPageWinners}`
  );
  const data: ValueType[] = await response.json();
  return data;
};

export const createWinner = async (id: number, time: number): Promise<void> => {
  await getApiQueryMethod(methods.create, `${path.winners}?id=${id}&wins=${1}&time=${time}`, {
    id: id,
    wins: 1,
    time: time,
  });
};

export const updateWinner = async (id: number, time: number): Promise<void> => {
  const response: Response = await fetch(`${url}${path.winners}`);
  const data: ObjectValue<number>[] = await response.json();
  const dataId = data.map((el: ObjectValue<number>) => el.id);
  if (dataId.indexOf(id) >= 0) {
    getApiQueryMethod(methods.update, `${path.winners}/${id}`, {
      wins: data[dataId.indexOf(id)].wins + 1,
      time: time < data[dataId.indexOf(id)].time ? time : data[dataId.indexOf(id)].time,
    });
  } else {
    createWinner(id, time);
  }
};

export const deleteWinner = async (id: number): Promise<void> => {
  const response: Response = await fetch(`${url}${path.winners}`);
  const data: ObjectValue<number>[] = await response.json();
  for (const winner of data) {
    if (winner.id === id) {
      await fetch(`${url}${path.winners}/${id}`, {
        method: methods.delete,
      });
    }
  }
};
