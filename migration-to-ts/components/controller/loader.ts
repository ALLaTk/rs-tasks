import { Callback, TotalSoursesAndArticle, NumberStatus } from '../app/appTypes';
export class Loader {
  baseLink: string;

  options: { [key: string]: string };

  constructor(baseLink: string, options: { [key: string]: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  protected getResp(
    { endpoint, options = {} }: { endpoint: string; options?: { sources?: string } },
    callback: Callback<TotalSoursesAndArticle> = (): void => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === NumberStatus.A || res.status === NumberStatus.B)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: { sources?: string }, endpoint: string): string {
    const urlOptions: { sources?: string } = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    (Object.keys(urlOptions) as (keyof typeof urlOptions)[]).forEach((key): void => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(
    method: string,
    endpoint: string,
    callback: Callback<TotalSoursesAndArticle>,
    options: { sources?: string }
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: TotalSoursesAndArticle) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}
