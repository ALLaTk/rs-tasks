import { getUpdateCar } from '../API/queryAPIForGarage';
import { createButton, createInput } from '../utilities/createHTMLElements';
import { InitalValuesForInput, valueButtonSelect } from '../utilities/interface';
import { renderRacingLine } from '../view/garage';
import { renderWinnersPanel } from '../view/winner';

export const inputUpdateModel: HTMLInputElement = createInput(
  InitalValuesForInput.modelCar,
  'input__name model-update',
  'text',
  'text'
);

inputUpdateModel.oninput = () => {
  valueButtonSelect.select.name = inputUpdateModel.value;
};

export const inputUpdateColor: HTMLInputElement = createInput(
  InitalValuesForInput.colorCar,
  'input__color color-update',
  'color',
  'color'
);

inputUpdateColor.oninput = () => {
  valueButtonSelect.select.color = inputUpdateColor.value;
};

export const createBtnUpdateCar = (): HTMLButtonElement => {
  const updateCarBtn: HTMLButtonElement = createButton('update__btn', 'UPDATE');
  updateCarBtn.onclick = async () => {
    if (valueButtonSelect.select.id) {
      await getUpdateCar(valueButtonSelect.select.name, valueButtonSelect.select.color, valueButtonSelect.select.id);
      renderRacingLine();
      renderWinnersPanel();
    }
    inputUpdateModel.value = InitalValuesForInput.modelCar;
    inputUpdateColor.value = InitalValuesForInput.colorCar;
  };
  return updateCarBtn;
};
