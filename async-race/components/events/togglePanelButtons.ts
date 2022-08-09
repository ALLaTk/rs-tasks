import { createButton } from '../utilities/createHTMLElements';
import { disableButton, enableButton } from '../utilities/enableOrDisableButton';
import { garageContent } from '../view/garage';
import { renderheaderWinner, renderWinnersPanel, winnerPanel } from '../view/winner';

export const createGarageBtn = (): HTMLButtonElement => {
  const garageBtn: HTMLButtonElement = createButton('toogle__button garage active', 'GARAGE');
  garageBtn.onclick = () => {
    const winnersBtn = <HTMLButtonElement>document.querySelector('.winners');
    enableButton([winnersBtn]);
    disableButton([garageBtn]);
    garageContent.style.display = 'block';
    winnerPanel.style.display = 'none';
  };
  return garageBtn;
};

export const createWinnersBtn = (): HTMLButtonElement => {
  const winnersBtn: HTMLButtonElement = createButton('toogle__button winners', 'WINNERS');
  winnersBtn.onclick = () => {
    const garageBtn = <HTMLButtonElement>document.querySelector('.garage');
    enableButton([garageBtn]);
    disableButton([winnersBtn]);
    garageContent.style.display = 'none';
    winnerPanel.style.display = 'block';
    renderWinnersPanel();
    renderheaderWinner();
  };
  return winnersBtn;
};
