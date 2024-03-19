import CartStore from 'stores/cart-store.ts';
import { OrderForm } from 'components/order-form/order-form.tsx';
import OrdersStore from 'stores/orders-store.ts';
import s from './order-registration.module.scss';

export const OrderRegistration = () => {
  const { totalPrice, totalCount, items } = CartStore;
  const { addOrder } = OrdersStore;

  const onSubmitForm = () => {
    addOrder(items);
  };

  return (
    <div className={s.container}>
      <h2>Order form</h2>
      <div className={s.orderWrapper}>
        <div className={s.orderForm}>
          <OrderForm onSubmit={onSubmitForm} />
        </div>
        <div className={s.priceWrapper}>
          <div className={s.price}>
            <span>Total price: </span>
            <span>${totalPrice}</span>
          </div>
          <div className={s.products}>
            <span>Total products: </span>
            <span>{totalCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
