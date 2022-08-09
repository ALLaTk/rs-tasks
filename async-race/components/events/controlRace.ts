import { createButton } from '../utilities/createHTMLElements';
import { objArrsCar, ObjectCar, ObjectValue, StatusError } from '../utilities/interface';
import { getParamRaceForStart, getStatusDrive, sendStatusStop } from '../API/queryApiForEngine';
import { createAnimation, idAnimation } from '../utilities/createAnimation';
import { renderMessageWiner } from '../view/messageWinner';
import { updateWinner } from '../API/queryApiForWinners';
import { renderWinnersPanel } from '../view/winner';
import { disableButton, enableButton, getAllBtns } from '../utilities/enableOrDisableButton';
import { isFilled } from '../utilities/interface';
import { mainBlock } from '../view/renderContent';

export const raceBtn: HTMLButtonElement = createButton('control-line__race', 'RACE');
export const resetBtn: HTMLButtonElement = createButton('control-line__reset active', 'RESET');
let resultRace: Array<number[]> = [];

export const pushCarArrays = (carsDiv: HTMLDivElement, carsObj: ObjectCar): void => {
  objArrsCar.arrCarsElements.push(carsDiv);
  objArrsCar.arrCarsObjects.push(carsObj);
  objArrsCar.arrAllCars.push([carsDiv, carsObj]);
};

const createRace = () => {
  Promise.allSettled(objArrsCar.arrCarsObjects.map((el) => el)).then((cars) => {
    cars.forEach((car, i) => {
      let value: ObjectCar | string;
      if ((car.status, isFilled(car))) {
        value = car.value;
      } else value = car.status;

      getParamRaceForStart((<ObjectCar>value).name, (<ObjectCar>value).color, (<ObjectCar>value).id).then((res) => {
        const requestID: ObjectValue<number> = createAnimation(
          objArrsCar.arrAllCars[i][0],
          <number>res.velocity,
          <number>res.distance
        );
        const time: string = (<number>res.distance / <number>res.velocity / 1000).toFixed(3);
        const gap: number = Math.floor(mainBlock.getBoundingClientRect().width) - 140;
        getStatusDrive((<ObjectCar>value).id).then((status) => {
          if (status === StatusError.brokeDown) {
            window.cancelAnimationFrame(requestID.id);
          } else {
            while (resultRace.length <= 0) {
              let transform: string = objArrsCar.arrAllCars[i][0].style.transform;
              if (String(gap).length === 4) {
                transform = transform.slice(-7, -3);
              } else transform = transform.slice(-6, -3);
              if (gap === +transform) {
                resultRace.push([(<ObjectCar>value).id, +time]);
                renderMessageWiner((<ObjectCar>value).name, time);
                updateWinner((<ObjectCar>value).id, +time);
              }
              setTimeout(() => renderWinnersPanel(), 1000);
              break;
            }
          }
          sendStatusStop((<ObjectCar>value).name, (<ObjectCar>value).color, (<ObjectCar>value).id);
        });
      });
    });
  });
};

raceBtn.onclick = () => {
  resultRace = [];
  const arrBtns: Array<HTMLButtonElement[]> = getAllBtns();
  arrBtns.forEach((btns) => disableButton(btns));
  enableButton([resetBtn]);
  disableButton([raceBtn]);
  createRace();
};

resetBtn.onclick = async () => {
  const arrBtns: Array<HTMLButtonElement[]> = getAllBtns();
  disableButton([resetBtn]);
  setTimeout(() => {
    arrBtns.forEach((btns) => enableButton(btns));
    enableButton([raceBtn]);
  }, 6000);
  for (const car of objArrsCar.arrAllCars) {
    await sendStatusStop(car[1].name, car[1].color, car[1].id);
    window.cancelAnimationFrame(idAnimation.id);
    setTimeout(() => {
      car[0].style.transform = `translateX(0px)`;
    }, 1000);
  }
  objArrsCar.arrAllCars.forEach((car) => (car[0].style.transform = `translateX(0px)`));
};
