import { makeAutoObservable } from 'mobx';
import { Product } from 'stores/products-store.ts';
import { makePersistable } from 'mobx-persist-store';

export type CartEntity = { count: number } & Product;

class CartStore {
  items: CartEntity[] = [];

  totalPrice = 0;

  totalCount = 0;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'cart',
      properties: ['items', 'totalCount', 'totalPrice'],
      storage: window.localStorage,
    });
  }

  addItem = (item: Product) => {
    const foundItem = this.items.find((el) => el.id === item.id);

    if (foundItem) {
      foundItem.count += 1;
    } else {
      this.items.push({ ...item, count: 1 });
    }

    this.totalPrice += +item.price;
    this.totalCount += 1;
  };

  removeItem = (id: string) => {
    const foundItem = this.items.find((el) => el.id === id);

    if (foundItem) {
      foundItem.count -= 1;
      if (foundItem.count === 0) {
        this.items = this.items.filter((el) => el.id !== id);
      }
      this.totalPrice -= +foundItem.price;
      this.totalCount -= 1;
    }
  };

  removeItems = (id: string) => {
    const foundItem = this.items.find((el) => el.id === id);
    if (foundItem) {
      this.items = this.items.filter((el) => el.id !== id);
      this.totalPrice -= foundItem.count * +foundItem.price;
      this.totalCount -= foundItem.count;
    }
  };

  clearCart = () => {
    this.items = [];
    this.totalPrice = 0;
    this.totalCount = 0;
  };
}

export default new CartStore();
