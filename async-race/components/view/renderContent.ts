import { createDivElement } from '../utilities/createHTMLElements';
import { garageContent, renderRacingLine } from './garage';
import { modalWindowWinner } from './messageWinner';
import togglePanel from './togglePanel';
import { renderheaderWinner, renderHeaderWinnersPanel, renderWinnersPanel, winnerPanel } from './winner';

export const mainBlock = createDivElement('main__block');

export const renderAllContent = () => {
  renderRacingLine();
  renderheaderWinner();
  renderHeaderWinnersPanel();
  renderWinnersPanel();
};

mainBlock.append(modalWindowWinner);
mainBlock.append(togglePanel);
mainBlock.append(winnerPanel);
mainBlock.append(garageContent);
document.body.append(mainBlock);
