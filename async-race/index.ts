import './style.scss';
import racingPanel from './components/view/racingControlPanel';
import { prevPageButton, nextPageButton, pagesContentBtn, renderRacingLine } from './components/view/garage';

document.body.append(racingPanel);
pagesContentBtn.append(prevPageButton);
pagesContentBtn.append(nextPageButton);
document.body.append(pagesContentBtn);
renderRacingLine();

// const generateQuveryString = (queryProperties: Array<object>) => queryProperties.length
//     ? `?${queryProperties.map(el =>
//        `${(<any>el).key}=${(<any>el).value}`).join('&')}` : '';
