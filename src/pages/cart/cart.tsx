import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { CartItem } from 'components/ui/cart-item/cart-item.tsx';
import { useStores } from 'app/providers/root-store-context';
import s from './cart.module.scss';

export const CartPage = observer(() => {
  const {
    cart: {
      items, clearCart, removeItems, addItem, removeItem, totalPrice, totalCount,
    },
  } = useStores();

  const navigate = useNavigate();

  return (
    <div className={s.container}>
      {items.length === 0 ? (
        <div className={s.emptyCart}>
          <h2>The shopping cart is empty</h2>
          <Button
            onClick={() => navigate(routePaths.main)}
            type="primary"
          >
            Continue shopping
          </Button>
        </div>
      ) : (
        <>
          <h2>Cart ({items.length})</h2>
          <div className={s.cartWrapper}>
            <div className={s.orderWrapper}>
              {items.map((el) => (
                <CartItem
                  item={el}
                  key={el.id}
                  addItem={addItem}
                  removeItems={removeItems}
                  removeItem={removeItem}
                />
              ))}
              <div className={s.btns}>
                <Button
                  icon={<ArrowLeftOutlined />}
                  type="primary"
                  onClick={() => navigate(routePaths.main)}
                >
                  Back to shop
                </Button>
                <Button onClick={clearCart} danger>Remove all</Button>
              </div>
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
              <Button type="primary" onClick={() => navigate(routePaths.order)}>Order</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
});
