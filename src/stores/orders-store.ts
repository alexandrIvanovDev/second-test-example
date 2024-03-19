import { makeAutoObservable } from 'mobx';
import { CartEntity } from 'stores/cart-store.ts';
import { makePersistable } from 'mobx-persist-store';

class OrdersStore {
  orders: CartEntity[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'orders',
      properties: ['orders'],
      storage: window.localStorage,
    });
  }

  addOrder = (items: CartEntity[]) => {
    this.orders.push(...items);
  };

  clearOrderHistory = () => {
    this.orders = [];
  };

  get orderItems() {
    return this.orders
  }
}

export default new OrdersStore();
