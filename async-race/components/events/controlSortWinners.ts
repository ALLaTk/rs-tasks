import { createDivElement } from '../utilities/createHTMLElements';
import { renderWinnersPanel } from '../view/winner';

export let paramSort = 'ASC';
export let valueSort = 'time';
export const titleWins: HTMLDivElement = createDivElement('title wins');
export const titleTime: HTMLDivElement = createDivElement('title time');

titleWins.onclick = () => {
  valueSort = 'wins';
  titleTime.innerHTML = 'Time(sec)';
  if (paramSort === 'ASC') {
    paramSort = 'DESC';
    titleWins.innerHTML = 'Wins↓';
  } else {
    paramSort = 'ASC';
    titleWins.innerHTML = 'Wins↑';
  }
  renderWinnersPanel();
};

titleTime.onclick = () => {
  valueSort = 'time';
  titleWins.innerHTML = 'Wins';
  if (paramSort === 'ASC') {
    paramSort = 'DESC';
    titleTime.innerHTML = 'Time(sec)↓';
  } else {
    paramSort = 'ASC';
    titleTime.innerHTML = 'Time(sec)↑';
  }
  renderWinnersPanel();
};
