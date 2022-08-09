import { path, url } from '../API/queryAPIMethod';
import { createButton } from '../utilities/createHTMLElements';
import { ObjectCar, ValueType } from '../utilities/interface';
import { renderRacingLine } from '../view/garage';
import { renderWinnersPanel } from '../view/winner';

export let countPageGarge = 1;
export let countPageWinners = 1;

export const nextPageBtnGarage: HTMLButtonElement = createButton('button__page', 'NEXT');
export const prevPageBtnGarage: HTMLButtonElement = createButton('button__page', 'PREV');
export const nextPageWinnerBtn: HTMLButtonElement = createButton('button__page-winners', 'NEXT');
export const prevPageWinnerBtn: HTMLButtonElement = createButton('button__page-winners', 'PREV');

prevPageBtnGarage.onclick = () => {
  if (countPageGarge > 1) {
    countPageGarge -= 1;
    renderRacingLine();
  }
};

nextPageBtnGarage.onclick = async () => {
  const response: Response = await fetch(`${url}${path.garage}${path.limitCarsOnPageGarage}${countPageGarge + 1}`);
  const data: ObjectCar[] = await response.json();
  if (data.length) {
    countPageGarge += 1;
    renderRacingLine();
  }
};

prevPageWinnerBtn.onclick = () => {
  if (countPageWinners > 1) {
    countPageWinners -= 1;
    renderWinnersPanel();
  }
};

nextPageWinnerBtn.onclick = async () => {
  const response: Response = await fetch(`${url}${path.winners}${path.limitCarsOnPageWinners}${countPageWinners + 1}`);
  const data: ValueType[] = await response.json();
  if (data.length) {
    countPageWinners += 1;
    renderWinnersPanel();
  }
};
