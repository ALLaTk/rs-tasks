import './racingControlPanel.scss';
import { createDivElement } from '../utilities/createHTMLElements';
import { inputCreateModel, inputCreateColor, createBtnForCreateCar } from '../events/controlCreateCar';
import { inputUpdateModel, inputUpdateColor, createBtnUpdateCar } from '../events/controlUpdateCar';
import createGenerate100CarsBtn from '../events/generate100Cars';
import { raceBtn, resetBtn } from '../events/controlRace';

const carUpdateLine: HTMLDivElement = createDivElement('racing-desk update');
const carCreateLine: HTMLDivElement = createDivElement('racing-desk create');
const racingControlLine: HTMLDivElement = createDivElement('racing-desk control-line');
const racingPanel: HTMLDivElement = createDivElement('racing-desk main');

carUpdateLine.append(inputUpdateModel);
carUpdateLine.append(inputUpdateColor);
carUpdateLine.append(createBtnUpdateCar());

carCreateLine.append(inputCreateModel);
carCreateLine.append(inputCreateColor);
carCreateLine.append(createBtnForCreateCar());

racingControlLine.append(resetBtn);
racingControlLine.append(raceBtn);
racingControlLine.append(createGenerate100CarsBtn());

racingPanel.append(carCreateLine);
racingPanel.append(carUpdateLine);
racingPanel.append(racingControlLine);

export default racingPanel;
