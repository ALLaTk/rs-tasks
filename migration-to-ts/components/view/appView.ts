import { Sources, ISourses } from './sources/sources';
import { News, Article } from './news/news';

export interface IData {
  articles: Array<Article>;
  sources: Array<ISourses>;
}

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IData): void {
    const values: Article[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IData): void {
    const values: ISourses[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
