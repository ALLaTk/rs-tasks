import { createButton } from '../utilities/createHTMLElements';
import { ObjectCar } from '../utilities/interface';
import { valueButtonSelect, InitalValuesForInput } from '../utilities/interface';
import { deleteCar } from '../API/queryAPIForGarage';
import { renderRacingLine } from '../view/garage';
import { inputUpdateModel, inputUpdateColor } from './controlUpdateCar';
import { deleteWinner } from '../API/queryApiForWinners';
import { renderWinnersPanel } from '../view/winner';

export const createSelectCarButton = (car: ObjectCar): HTMLButtonElement => {
  const selectBtn: HTMLButtonElement = createButton('select-btn', 'Select');
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

export const createRemoveCarButton = (car: ObjectCar): HTMLButtonElement => {
  const removeBtn: HTMLButtonElement = createButton('remove-btn', 'Remove');
  removeBtn.onclick = async () => {
    await deleteWinner(car.id);
    await deleteCar(car.name, car.color, car.id);
    renderRacingLine();
    renderWinnersPanel();
    inputUpdateModel.value = InitalValuesForInput.modelCar;
    inputUpdateColor.value = InitalValuesForInput.colorCar;
  };
  return removeBtn;
};
