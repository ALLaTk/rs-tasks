import AppLoader from './appLoader';
import { AppArticleData, AppSoursesData, Callback } from '../app/appTypes';

class AppController extends AppLoader {
  public getSources(callback: Callback<AppSoursesData>): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: Callback<AppArticleData>): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if ((target.classList as DOMTokenList).contains('source__item')) {
        const sourceId: string | null = target.getAttribute('data-source-id');
        if (sourceId) {
          if (newsContainer.getAttribute('data-source') !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
              {
                endpoint: 'everything',
                options: {
                  sources: sourceId,
                },
              },
              callback
            );
          }
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
