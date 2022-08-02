import { createButton } from '../utilities/createHTMLElements';
import { ObjectCar } from '../utilities/interface';
import { valueButtonSelect, initalValuesForInput } from '../utilities/variables';
import { getDeleteCar } from '../API/queryAPIForGarage';
import { renderRacingLine } from '../view/garage';
import { inputUpdateModel, inputUpdateColor } from './controlUpdateCar';

export const createSelectCarButton = (car: ObjectCar) => {
  const selectBtn = createButton('select-btn', 'Select');
  const inputUpdateModelCar = <HTMLInputElement>document.querySelector('.model-update');
  const inputUpdateColorCar = <HTMLInputElement>document.querySelector('.color-update');
  selectBtn.onclick = () => {
    valueButtonSelect.select = car;
    inputUpdateModelCar.value = valueButtonSelect.select.name;
    inputUpdateColorCar.value = valueButtonSelect.select.color;
    inputUpdateModelCar.value = car.name;
    inputUpdateColorCar.value = car.color;
  };
  return selectBtn;
};

export const createRemoveCarButton = (car: ObjectCar) => {
  const removeBtn = createButton('remove-btn', 'Remove');
  removeBtn.onclick = async () => {
    await getDeleteCar(car.name, car.color, car.id);
    (async () => {
      renderRacingLine();
    })();
    inputUpdateModel.value = initalValuesForInput.modelCar;
    inputUpdateColor.value = initalValuesForInput.colorCar;
  };
  return removeBtn;
};
