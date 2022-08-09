import { garageContent, renderRacingLine } from './garage';
import { modalWindowWinner } from './messageWinner';
import togglePanel from './togglePanel';
import { renderheaderWinner, renderHeaderWinnersPanel, renderWinnersPanel, winnerPanel } from './winner';

export const renderAllContent = () => {
  renderRacingLine();
  renderheaderWinner();
  renderHeaderWinnersPanel();
  renderWinnersPanel();
};
document.body.append(modalWindowWinner);
document.body.append(togglePanel);
document.body.append(winnerPanel);
document.body.append(garageContent);
