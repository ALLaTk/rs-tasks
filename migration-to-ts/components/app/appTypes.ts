export interface AppTypes {
  urlToImage: string;
  author: string;
  source: { name: string };
  url: string;
  title: string;
  publishedAt: string;
  description: string;
  id: string;
  name: string;
}

export type SoursesData = Pick<AppTypes, 'id' | 'name'>;

export type ArticleData = Pick<
  AppTypes,
  'urlToImage' | 'author' | 'source' | 'url' | 'title' | 'publishedAt' | 'description'
>;

export interface NewsAndSoursesInterface<T> {
  draw: (data: T[]) => void;
}

export interface AppViewInterface<T> {
  drawNews: (data: T) => void;
  drawSources: (data: T) => void;
}

export interface Callback<T> {
  (data: T): void;
}

export interface AppArticleData {
  articles: ArticleData[];
}

export interface AppSoursesData {
  sources: SoursesData[];
}

export type TotalSoursesAndArticle = AppArticleData & AppSoursesData;

export enum NumberStatus {
  A = 401,
  B = 404,
}
