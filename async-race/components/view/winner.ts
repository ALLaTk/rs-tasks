import './winner.scss';
import { createDivElement } from '../utilities/createHTMLElements';
import { url, path } from '../API/queryAPIMethod';
import { getCar } from '../API/queryAPIForGarage';
import { renderCars } from './garage';
import { getAllWinners } from '../API/queryApiForWinners';
import { ValueType } from '../utilities/interface';
import { paramSort, titleTime, titleWins, valueSort } from '../events/controlSortWinners';
import { countPageWinners, nextPageWinnerBtn, prevPageWinnerBtn } from '../events/controlPage';

export const pagesContentWinnerBtn: HTMLDivElement = createDivElement('pages__btns winners');

export const winnerPanel: HTMLDivElement = createDivElement('winners__content');
const blockHeadrerWinner: HTMLDivElement = createDivElement('count__container');
const blockPanelWinner: HTMLDivElement = createDivElement('winner__panel title');
const blockPanelList: HTMLDivElement = createDivElement('winner__panel list-content');

export const renderheaderWinner = async (): Promise<void> => {
  blockHeadrerWinner.innerHTML = '';
  const response = await fetch(`${url}${path.winners}`);
  const numWinners = await response.json();
  const num: HTMLDivElement = createDivElement('count__winner');
  const page: HTMLDivElement = createDivElement('count__page');
  num.innerHTML = `- winners ${numWinners.length} -`;
  page.innerHTML = `- page ${countPageWinners} -`;
  blockHeadrerWinner.append(num);
  blockHeadrerWinner.append(page);
};

export const renderHeaderWinnersPanel = () => {
  const titleNumber: HTMLDivElement = createDivElement('title num');
  const titleCar: HTMLDivElement = createDivElement('title car');
  const titleModel: HTMLDivElement = createDivElement('title model');
  titleNumber.innerHTML = 'Number';
  titleCar.innerHTML = 'Car';
  titleModel.innerHTML = 'Model';
  titleWins.innerHTML = 'Wins';
  titleTime.innerHTML = 'Time(sec)';
  blockPanelWinner.append(titleNumber);
  blockPanelWinner.append(titleCar);
  blockPanelWinner.append(titleModel);
  blockPanelWinner.append(titleWins);
  blockPanelWinner.append(titleTime);
};

export const renderWinnersPanel = async () => {
  blockPanelList.innerHTML = '';
  let numberList = 0;
  const winners: Promise<ValueType[]> = getAllWinners(valueSort, paramSort);
  winners.then((data) => {
    for (let i = 0; i < data.length; i++) {
      const carData: Promise<ValueType> = getCar(<number>data[i].id);
      carData.then((res) => {
        const list: HTMLDivElement = createDivElement('list-winner');
        const numList: HTMLDivElement = createDivElement('number');
        const wins: HTMLDivElement = createDivElement('wins');
        const time: HTMLDivElement = createDivElement('time');
        numList.innerHTML = `${(numberList += 1)}`;
        wins.innerHTML = `${<number>data[i].wins}`;
        time.innerHTML = `${<number>data[i].time}`;
        const car: HTMLDivElement = renderCars(<string>res.color);
        const model: HTMLDivElement = createDivElement('model');
        model.innerHTML = `${<string>res.name}`;
        list.append(numList);
        list.append(car);
        list.append(model);
        list.append(wins);
        list.append(time);
        blockPanelList.append(list);
      });
    }
  });
};

pagesContentWinnerBtn.append(prevPageWinnerBtn);
pagesContentWinnerBtn.append(nextPageWinnerBtn);
winnerPanel.append(pagesContentWinnerBtn);
winnerPanel.append(blockHeadrerWinner);
winnerPanel.append(blockPanelWinner);
winnerPanel.append(blockPanelList);
