export interface Product {
  id?: number;
  name: string;
  quantity: number;
  expirationDate: string;
}
/** 
const products: Product[] = [
  {
    name: 'Product 1',
    quantity: 20,
    expirationDate: '02/02/2022',
    id: 0
  },
  {
    name: 'Product 8',
    quantity: 42,
    expirationDate: '01/01/2022',
    id: 1
  },
  {
    name: 'Product 2',
    quantity: 2,
    expirationDate: '02/10/2022',
    id: 2

  },
  {
    name: 'Product 3',
    quantity: 100,
    expirationDate: '04/06/2022',
    id: 3
  },
  {
    name: 'Product 4',
    quantity: 8,
    expirationDate: '01/22/2022',
    id: 4
  },
  {
    name: 'Product 5',
    quantity: 4,
    expirationDate: '06/06/2022',
    id: 5
  },
  {
    name: 'Product 6',
    quantity: 45,
    expirationDate: '07/07/2022',
    id: 6
  },
  {
    name: 'Product 7',
    quantity: 30,
    expirationDate: '08/08/2022',
    id: 7
  }
];

export const getProducts = () => products;

export const getProduct = (id: number) => products.find(m => m.id === id);
*/ 