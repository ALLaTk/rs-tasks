import { IData } from '../view/appView';

enum NumberStatus {
  A = 401,
  B = 404,
}

class Loader {
  baseLink: string;

  options: { [key: string]: string };

  constructor(baseLink: string, options: { [key: string]: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: { sources?: string } },
    callback: { (data: IData): void } = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === NumberStatus.A || res.status === NumberStatus.B)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: { sources?: string }, endpoint: string): string {
    const urlOptions: { sources?: string } = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    (Object.keys(urlOptions) as (keyof typeof urlOptions)[]).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: { (data: IData): void }, options: { sources?: string }) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: IData) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
