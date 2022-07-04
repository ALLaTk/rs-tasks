import { Loader } from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '922bb8b4ac4345b6851bffc1ea37de62',
      // '4c67d8c9aef14c1b8ced7747e25bd186'
    });
  }
}

export default AppLoader;
