import { OrderForm } from 'components/forms/order-form/order-form.tsx';
import { useStores } from 'app/providers/root-store-context';
import s from './order-registration.module.scss';

export const OrderRegistration = () => {
  const {
    cart: {
      totalPrice, totalCount, items, clearCart,
    },
    orders: { addOrder },
    user: { user },
  } = useStores();

  const onSubmitForm = () => {
    addOrder(items);
  };

  return (
    <div className={s.container}>
      <h2>Order form</h2>
      <div className={s.orderWrapper}>
        <div className={s.orderForm}>
          <OrderForm onSubmit={onSubmitForm} email={user?.email} clearCart={clearCart} />
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
