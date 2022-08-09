import { createButton } from '../utilities/createHTMLElements';
import { ObjectCar, ValueType, StatusError } from '../utilities/interface';
import { getParamRaceForStart, getStatusDrive, sendStatusStop } from '../API/queryApiForEngine';
import { createAnimation, idAnimation } from '../utilities/createAnimation';
import { disableButton, enableButton } from '../utilities/enableOrDisableButton';

export const createMoveButton = (carObj: ObjectCar, carDiv: HTMLDivElement): { [key: string]: HTMLButtonElement } => {
  const startBtn: HTMLButtonElement = createButton('start__btn', 'Start');
  const stopBtn: HTMLButtonElement = createButton('stop__btn active', 'Stop');
  disableButton([stopBtn]);
  startBtn.onclick = async () => {
    disableButton([startBtn]);
    const startedParams: Promise<ValueType> = getParamRaceForStart(carObj.name, carObj.color, carObj.id);
    await startedParams.then((res: ValueType) => createAnimation(carDiv, <number>res.velocity, <number>res.distance));
    enableButton([stopBtn]);
    const statusDrive = getStatusDrive(carObj.id);
    statusDrive.then((status) => {
      if (status === StatusError.brokeDown) {
        window.cancelAnimationFrame(idAnimation.id);
      }
    });
  };

  stopBtn.onclick = () => {
    disableButton([stopBtn]);
    sendStatusStop(carObj.name, carObj.color, carObj.id);
    setTimeout(() => {
      window.cancelAnimationFrame(idAnimation.id);
      carDiv.style.transform = `translateX(0px)`;
      enableButton([startBtn]);
    }, 1000);
  };
  return { startBtn, stopBtn };
};
