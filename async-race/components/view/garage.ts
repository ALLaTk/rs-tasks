import './garage.scss';
import { createDivElement } from '../utilities/createHTMLElements';
import { objArrsCar, ObjectCar } from '../utilities/interface';
import { url, path } from '../API/queryAPIMethod';
import { createSelectCarButton, createRemoveCarButton } from '../events/controlChangeCar';
import { createMoveButton } from '../events/controlMoveCar';
import racingPanel from './racingControlPanel';
import togglePanel from './togglePanel';
import { pushCarArrays } from '../events/controlRace';
import { countPageGarge, nextPageBtnGarage, prevPageBtnGarage } from '../events/controlPage';

export const pagesContentBtn: HTMLDivElement = createDivElement('pages__btns');
export const countContainer: HTMLDivElement = createDivElement('count__container');
export const garageInner: HTMLDivElement = createDivElement('garage__inner');
export const garageContent: HTMLDivElement = createDivElement('garage__content');
export const renderCars = (color: string): HTMLDivElement => {
  const car: HTMLDivElement = createDivElement('racing__car winner');
  car.style.background = color;
  return car;
};

const renderMoveCarBtns = (carObj: ObjectCar, carDiv: HTMLDivElement): HTMLDivElement => {
  const moveButtosBlock: HTMLDivElement = createDivElement('move__buttons');
  const moveBtns: {
    [key: string]: HTMLButtonElement;
  } = createMoveButton(carObj, carDiv);
  moveButtosBlock.append(moveBtns.stopBtn);
  moveButtosBlock.append(moveBtns.startBtn);
  return moveButtosBlock;
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

export const renderRacingLine = async () => {
  objArrsCar.arrCarsElements = [];
  objArrsCar.arrCarsObjects = [];
  objArrsCar.arrAllCars = [];
  garageInner.innerHTML = '';
  countContainer.innerHTML = '';
  const responseGarage: Response = await fetch(`${url}${path.garage}`);
  const garage: ObjectCar[] = await responseGarage.json();
  const responseGarageLimit: Response = await fetch(
    `${url}${path.garage}${path.limitCarsOnPageGarage}${countPageGarge}`
  );
  const garageLimit: ObjectCar[] = await responseGarageLimit.json();
  const countCar: HTMLDivElement = renderCountTotalCars(garage.length);
  const countCarsOnCarage: HTMLDivElement = renderPageCount(countPageGarge);
  for (let i = 0; i < garageLimit.length; i++) {
    const car: HTMLDivElement = renderCars(garageLimit[i].color);
    const moveCarBtns: HTMLDivElement = renderMoveCarBtns(garageLimit[i], car);
    const upgrateCar: HTMLDivElement = renderSelectAndRemoveBtn(garageLimit[i], garageLimit[i].name);
    const racingLine: HTMLDivElement = createDivElement('racing__line');
    const flag: HTMLImageElement = document.createElement('img');
    flag.className = 'racing__flag';
    flag.src = './assets/flag.svg';
    racingLine.append(upgrateCar);
    racingLine.append(moveCarBtns);
    racingLine.append(car);
    racingLine.append(flag);
    garageInner.append(racingLine);
    pushCarArrays(car, garageLimit[i]);
  }
  countContainer.append(countCar);
  countContainer.append(countCarsOnCarage);
  garageContent.append(countContainer);
  garageContent.append(garageInner);
};

garageContent.append(togglePanel);
garageContent.append(racingPanel);
pagesContentBtn.append(prevPageBtnGarage);
pagesContentBtn.append(nextPageBtnGarage);
garageContent.append(pagesContentBtn);
