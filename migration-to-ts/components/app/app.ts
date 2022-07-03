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

  public start(): void {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) => {
      this.controller.getNews(e, (data: Readonly<AppArticleData>): void => this.view.drawNews(data));
    });
    this.controller.getSources((data: Readonly<AppSoursesData>): void => this.view.drawSources(data));
  }
   activeSourseBtn(event: Event): void {
      const target = event.target as HTMLElement;
      if ((target.classList as DOMTokenList).contains('source__item'))
        ([...document.querySelectorAll('.source__item')] as HTMLElement[]).forEach((el: HTMLElement): void => {
          (el.classList as DOMTokenList).remove('active');
        });
      (target.classList as DOMTokenList).add('active');
    }
   
    activeAlphaBtn(event: Event): void {
      const target = event.target as HTMLElement;
      if ((target.classList as DOMTokenList).contains('alpha__char'))
        ([...document.querySelectorAll('.alpha__char')] as HTMLElement[]).forEach((el: HTMLElement): void => {
          el.classList.remove('active');
        });
      target.classList.add('active');
      const sourseItems = [...document.querySelectorAll('.source__item')] as HTMLElement[];
      const alphItem = document.querySelector('.alpha__char.active') as HTMLElement;

      sourseItems.forEach((el: HTMLElement): void => {
        if (el.innerHTML[0] === alphItem.innerHTML[0]) {
          el.style.display = 'block';
          el.style.transform = '5s';
          el.style.animationName = 'move';
          el.style.animationDuration = '1.5s';
        }  else el.style.display = 'none';
      });
    }

  
   active(): void{
       (document.querySelector('.sources') as HTMLElement).addEventListener('click', this.activeSourseBtn);
     (document.querySelector('.alphabet') as HTMLElement).addEventListener('click', this.activeAlphaBtn);
   }

}

export default App;
