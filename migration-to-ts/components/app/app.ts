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
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) =>
      this.controller.getNews(e, (data: Readonly<AppArticleData>): void => this.view.drawNews(data))
    );
    this.controller.getSources((data: Readonly<AppSoursesData>): void => this.view.drawSources(data));
  }
}

export default App;
