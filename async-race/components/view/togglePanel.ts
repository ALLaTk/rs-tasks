import './togglePanel.scss';
import { createDivElement } from '../utilities/createHTMLElements';
import { createGarageBtn, createWinnersBtn } from '../events/togglePanelButtons';

const togglePanel: HTMLDivElement = createDivElement('toggle-panel');

togglePanel.append(createGarageBtn());
togglePanel.append(createWinnersBtn());

export default togglePanel;
