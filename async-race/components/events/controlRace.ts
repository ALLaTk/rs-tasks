import { createButton } from '../utilities/createHTMLElements';

export const createRaceBtn = (): HTMLButtonElement => {
  const racingBtn: HTMLButtonElement = createButton('control-line__race', 'RACE');
  return racingBtn;
};

export const createResetBtn = (): HTMLButtonElement => {
  const resetBtn: HTMLButtonElement = createButton('control-line__reset', 'RESET');
  return resetBtn;
};
