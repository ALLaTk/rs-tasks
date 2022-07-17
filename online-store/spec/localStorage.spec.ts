import localStore from '../components/localStorage/LocalStorage';

describe('localStore.putFilterSort', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.putFilterSort).toBeInstanceOf(Function);
  });
  it('Should return a string', () => {
    const string = 'test';
    const result = localStore.putFilterSort(string);
    expect(result).toBe(string);
  });
});

describe('localStore.getFilterSort', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.getFilterSort).toBeInstanceOf(Function);
  });
  it('Should return a string', () => {
    const string = 'test';
    const result = localStore.getFilterSort();
    expect(result).toBe(string);
  });
});

describe('localStore.putItems', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.putItems).toBeInstanceOf(Function);
  });
  it('Should return an object with a boolean value and an array of strings', () => {
    const object = { products: ['test'], pushProduct: true };
    const result = localStore.putItems('test');
    expect(result).toEqual(object);
  });
});

describe('localStore.putFilter', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.putFilter).toBeInstanceOf(Function);
  });
  it('Should return an object with a boolean value', () => {
    const object = { test: true };
    const result = localStore.putFilter('test', true);
    expect(result).toEqual(object);
  });
});

describe('localStore.putText', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.putText).toBeInstanceOf(Function);
  });
  it('Should return a string', () => {
    const string = 'test';
    const result = localStore.putText(string);
    expect(result).toEqual(string);
  });
});

describe('localStore.getText', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.getText).toBeInstanceOf(Function);
  });
  it('Should return a string', () => {
    const string = 'test';
    const result = localStore.getText();
    expect(result).toEqual(string);
  });
});

describe('localStore.putSliderItems', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.putSliderItems).toBeInstanceOf(Function);
  });
  it('Should return an array of string', () => {
    const array = ['1', '2'];
    const result = localStore.putSliderItems('1', '2');
    expect(result).toEqual(array);
  });
});

describe('localStore.putSliderPrice', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.putSliderPrice).toBeInstanceOf(Function);
  });
  it('Should return an array of string', () => {
    const array = ['120', '520'];
    const result = localStore.putSliderPrice('120', '520');
    expect(result).toEqual(array);
  });
});

describe('localStore.putSortProducts', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.putSortProducts).toBeInstanceOf(Function);
  });
  it('Should return an array of objects ', () => {
    const array = [
      {
        id: 'item-21',
        name: 'crystal',
        image: './assets/jpg/21.jpg',
        company: 'Maytoni',
        power: '225WT',
        color: 'white',
        quantity: 1,
        price: 520,
        popular: 'yes',
      },
    ];
    const result = localStore.putSortProducts(array);
    expect(result).toEqual(array);
  });
});

describe('localStore.putProducts', () => {
  it('Should be an instance of Function', () => {
    expect(localStore.putProducts).toBeInstanceOf(Function);
  });
  it('Should return an object of array', () => {
    const object = {
      price: [120],
    };
    const result = localStore.putProducts(object);
    expect(result).toEqual({ products: [object] });
  });
});
