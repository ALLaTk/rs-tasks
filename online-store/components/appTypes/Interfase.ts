export interface ProductsInterfase {
  id: string;
  name: string;
  image: string;
  company: string;
  power: string;
  color: string;
  quantity: number;
  price: number;
  popular: string;
}

export interface FilterInterfase<T> {
  [key: string]: T[];
}
