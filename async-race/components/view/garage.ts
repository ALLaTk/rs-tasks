import './garage.scss';
import { createDivElement, createButton } from '../utilities/createHTMLElements';
import { ObjectCar } from '../utilities/interface';
import { url, path } from '../API/queryAPIMethod';
import { createSelectCarButton, createRemoveCarButton } from '../events/controlChangeCar';

export const pagesContentBtn = createDivElement('pages__btns');
export const nextPageButton = createButton('button__page', 'NEXT');
export const prevPageButton = createButton('button__page', 'PREV');

export const countContainer = createDivElement('count__container');
export const garageInner = createDivElement('garage__inner');

const renderCars = (color: string): HTMLDivElement => {
  const car: HTMLDivElement = createDivElement('racing__car');
  car.style.background = color;
  return car;
};

const createStartButton = () => {
  const startBtn = createButton('start__btn', 'A');
  return startBtn;
};

const createStopButton = () => {
  const stopBtn = createButton('stop__btn', 'B');
  return stopBtn;
};

const renderMoveCarBtnsAndModelCar = (): HTMLDivElement => {
  const moveButtos: HTMLDivElement = createDivElement('move__buttons');
  moveButtos.append(createStartButton());
  moveButtos.append(createStopButton());
  return moveButtos;
};

const renderSelectAndRemoveBtn = (car: ObjectCar, model: string): HTMLDivElement => {
  const moveButtos: HTMLDivElement = createDivElement('upgrate__btns');
  const carModel: HTMLElement = createDivElement('model__car');
  carModel.innerHTML = model;
  moveButtos.append(createSelectCarButton(car));
  moveButtos.append(createRemoveCarButton(car));
  moveButtos.append(carModel);
  return moveButtos;
};

const renderCountTotalCars = (CountCars: number): HTMLDivElement => {
  const totalCountCar: HTMLDivElement = createDivElement('count__car');
  totalCountCar.innerHTML = `- garage ${CountCars} -`;
  return totalCountCar;
};

const renderPageCount = (pageNumber: number): HTMLDivElement => {
  const countPage: HTMLDivElement = createDivElement('count__page');
  countPage.innerHTML = `- page ${pageNumber} -`;
  return countPage;
};

let countPag = 1;

export const renderRacingLine = async () => {
  garageInner.innerHTML = '';
  countContainer.innerHTML = '';
  const response2 = await fetch(`${url}${path.garage}`);
  const data2 = await response2.json();
  const response: Response = await fetch(`http://localhost:3000/garage?_limit=7&_page=${countPag}`);
  const data = await response.json();
  const countCar = renderCountTotalCars(data2.length);
  const countPage = renderPageCount(countPag);
  for (let i = 0; i < data.length; i++) {
    const car = renderCars(data[i].color);
    const moveCarBtns = renderMoveCarBtnsAndModelCar();
    const upgrateCar = renderSelectAndRemoveBtn(data[i], data[i].name);
    const racingLine = createDivElement('racing__line');
    const flag = document.createElement('img');
    flag.className = 'racing__flag';
    flag.src = './assets/flag.svg';
    racingLine.append(upgrateCar);
    racingLine.append(moveCarBtns);
    racingLine.append(car);
    racingLine.append(flag);
    garageInner.append(racingLine);
  }
  countContainer.append(countCar);
  countContainer.append(countPage);
  document.body.append(countContainer);
  document.body.append(garageInner);
};

prevPageButton.onclick = () => {
  if (countPag > 1) {
    countPag -= 1;
    renderRacingLine();
  }
};

nextPageButton.onclick = () => {
  countPag += 1;
  renderRacingLine();
};
