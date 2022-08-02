import { createButton, createInput } from '../utilities/createHTMLElements';
import { getCreateCar } from '../API/queryAPIForGarage';
import { renderRacingLine } from '../view/garage';
import { initalValuesForInput } from '../utilities/variables';

let modelCreateCar: string = initalValuesForInput.modelCar;
let colorCreateCar: string = initalValuesForInput.colorCar;

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

export const createBtnCreateCar = (): HTMLButtonElement => {
  const createCarBtn: HTMLButtonElement = createButton('create__btn', 'CREATE');
  createCarBtn.onclick = async () => {
    inputCreateColor.value = initalValuesForInput.colorCar;
    inputCreateModel.value = initalValuesForInput.modelCar;
    await getCreateCar(modelCreateCar, colorCreateCar);
    (async () => {
      renderRacingLine();
    })();
    modelCreateCar = initalValuesForInput.modelCar;
    colorCreateCar = initalValuesForInput.colorCar;
  };
  return createCarBtn;
};
