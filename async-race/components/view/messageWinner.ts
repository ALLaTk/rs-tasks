import './messageWinner.scss';
import { createDivElement } from '../utilities/createHTMLElements';

export const modalWindowWinner: HTMLDivElement = createDivElement('message');
const messageTitle: HTMLDivElement = createDivElement('winner-top__title');
const messageSubtitle: HTMLDivElement = createDivElement('winner-top__subtitle');
messageTitle.innerHTML = 'WINNER!';

export const renderMessageWiner = (model: string, time: string): void => {
  modalWindowWinner.style.display = 'block';
  setTimeout(() => {
    modalWindowWinner.style.display = 'none';
  }, 7000);
  messageSubtitle.innerHTML = `${model} finished!\n Time ${time} sec`;
};

modalWindowWinner.append(messageTitle);
modalWindowWinner.append(messageSubtitle);
