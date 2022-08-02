import { createButton, createInput } from '../utilities/createHTMLElements';
import { getUpdateCar } from '../API/queryAPIForGarage';
import { renderRacingLine } from '../view/garage';
import { initalValuesForInput, valueButtonSelect } from '../utilities/variables';

export const inputUpdateModel: HTMLInputElement = createInput(
  initalValuesForInput.modelCar,
  'input__name model-update',
  'text',
  'text'
);
inputUpdateModel.oninput = () => {
  valueButtonSelect.select.name = inputUpdateModel.value;
};

export const inputUpdateColor: HTMLInputElement = createInput(
  initalValuesForInput.colorCar,
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
    }
    inputUpdateModel.value = initalValuesForInput.modelCar;
    inputUpdateColor.value = initalValuesForInput.colorCar;
  };
  return updateCarBtn;
};
