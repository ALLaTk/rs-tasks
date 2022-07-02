import { Sources } from './sources/sources';
import { News } from './news/news';
import { ArticleData, SoursesData, TotalSoursesAndArticle, AppViewInterface } from '../app/appTypes';

export class AppView implements AppViewInterface<TotalSoursesAndArticle> {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: Partial<TotalSoursesAndArticle>): void {
    const values: ArticleData[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: Partial<TotalSoursesAndArticle>): void {
    const values: SoursesData[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
