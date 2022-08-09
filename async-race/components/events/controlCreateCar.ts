import { createButton, createInput } from '../utilities/createHTMLElements';
import { getCreateCar } from '../API/queryAPIForGarage';
import { renderRacingLine } from '../view/garage';
import { InitalValuesForInput } from '../utilities/interface';
import { inputUpdateModel, inputUpdateColor } from './controlUpdateCar';

let modelCreateCar: string = InitalValuesForInput.modelCar;
let colorCreateCar: string = InitalValuesForInput.colorCar;

export const inputCreateModel: HTMLInputElement = createInput(
  modelCreateCar,
  'input__name model-create',
  'text',
  'text'
);

inputCreateModel.oninput = () => {
  modelCreateCar = inputCreateModel.value;
};

export const inputCreateColor: HTMLInputElement = createInput(
  colorCreateCar,
  'input__color color-create',
  'color',
  'color'
);

inputCreateColor.oninput = () => {
  colorCreateCar = inputCreateColor.value;
};

export const createBtnForCreateCar = (): HTMLButtonElement => {
  const createCarBtn: HTMLButtonElement = createButton('create__btn', 'CREATE');
  createCarBtn.onclick = async () => {
    inputCreateColor.value = InitalValuesForInput.colorCar;
    inputUpdateModel.value = InitalValuesForInput.modelCar;
    inputCreateModel.value = InitalValuesForInput.modelCar;
    inputUpdateColor.value = InitalValuesForInput.colorCar;
    await getCreateCar(modelCreateCar, colorCreateCar);
    (async () => {
      renderRacingLine();
    })();
    modelCreateCar = InitalValuesForInput.modelCar;
    colorCreateCar = InitalValuesForInput.colorCar;
  };
  return createCarBtn;
};
