import CartStore from './cart-store.ts';
import FilterStore from './filter-store.ts';
import OrdersStore from './orders-store.ts';
import ProductsStore from './products-store.ts';
import UserStore from './user-store.ts';

export class RootStore {
  cart = CartStore;

  filter = FilterStore;

  orders = OrdersStore;

  products = ProductsStore;

  user = UserStore;
}
