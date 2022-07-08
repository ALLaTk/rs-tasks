import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { AppArticleData, AppSoursesData } from './appTypes';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  private activeSourseBtn(event: Event): void {
    const target = <HTMLElement>event.target;
    if (target.classList.contains('source__item'))
      (<HTMLElement[]>[...document.querySelectorAll('.source__item')]).forEach((el: HTMLElement): void => {
        el.classList.remove('active');
      });
    target.classList.add('active');
  }

  private activeAlphaBtn(event: Event): void {
    const target = <HTMLElement>event.target;

    if ((target.classList as DOMTokenList).contains('alpha__char'))
      (<HTMLElement[]>[...document.querySelectorAll('.alpha__char')]).forEach((el: HTMLElement): void => {
        el.classList.remove('active');
      });

    target.classList.add('active');
    const sourseItems = <HTMLElement[]>[...document.querySelectorAll('.source__item')];
    const alphItem = <HTMLElement>document.querySelector('.alpha__char.active');

    sourseItems.forEach((el: HTMLElement): void => {
      if (el.innerHTML[0] === alphItem.innerHTML[0]) {
        el.style.display = 'block';
        el.style.transform = '5s';
        el.style.animationName = 'move';
        el.style.animationDuration = '1.5s';
      } else el.style.display = 'none';
    });
  }

  public start(): void {
    (<HTMLElement>document.querySelector('.sources')).addEventListener('click', (e: MouseEvent) => {
      this.controller.getNews(e, (data: Readonly<AppArticleData>): void => this.view.drawNews(data));
    });
    this.controller.getSources((data: Readonly<AppSoursesData>): void => this.view.drawSources(data));
    (<HTMLElement>document.querySelector('.sources')).addEventListener('click', this.activeSourseBtn);
    (<HTMLElement>document.querySelector('.alphabet')).addEventListener('click', this.activeAlphaBtn);
  }
}

export default App;
