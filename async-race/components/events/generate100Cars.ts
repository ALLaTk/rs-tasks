import { getCreateCar } from '../API/queryAPIForGarage';
import { createButton } from '../utilities/createHTMLElements';
import { disableButton, enableButton } from '../utilities/enableOrDisableButton';
import getRandomColorlCar from '../utilities/getRandomColorCar';
import getRandomFullNameCar from '../utilities/getRandomModelCar';
import { ValueCounts } from '../utilities/interface';
import { renderRacingLine } from '../view/garage';

const createGenerate100CarsBtn = (): HTMLButtonElement => {
  const createGenerateCarsBtn: HTMLButtonElement = createButton('control-line__generate', 'GENERATE CARS');
  createGenerateCarsBtn.onclick = () => {
    disableButton([createGenerateCarsBtn]);
    for (let i = 0; i < ValueCounts.numberGenerateCars; i += 1) {
      getCreateCar(getRandomFullNameCar(), getRandomColorlCar());
    }
    setTimeout(() => {
      renderRacingLine();
      enableButton([createGenerateCarsBtn]);
    }, 1500);
  };
  return createGenerateCarsBtn;
};

export default createGenerate100CarsBtn;
