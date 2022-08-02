import { createButton } from '../utilities/createHTMLElements';
import getRandomColorlCar from '../utilities/getRandomColorCar';
import getRandomFullNameCar from '../utilities/getRandomModelCar';
import { getCreateCar } from '../API/queryAPIForGarage';
import { renderRacingLine } from '../view/garage';
import { valueCounts, activeClass } from '../utilities/variables';

const createGenerate100CarsBtn = (): HTMLButtonElement => {
  const createGenerateCarsBtn: HTMLButtonElement = createButton('control-line__generate', 'GENERATE CARS');
  createGenerateCarsBtn.onclick = () => {
    createGenerateCarsBtn.disabled = true;
    createGenerateCarsBtn.classList.add(activeClass);
    for (let i = 0; i < valueCounts.maxGenerateCars; i += 1) {
      getCreateCar(getRandomFullNameCar(), getRandomColorlCar());
    }
    setTimeout(() => {
      renderRacingLine();
      createGenerateCarsBtn.disabled = false;
      createGenerateCarsBtn.classList.remove(activeClass);
    }, 1500);
  };
  return createGenerateCarsBtn;
};

export default createGenerate100CarsBtn;
