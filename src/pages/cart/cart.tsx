import s from './cart.module.scss';
import CartStore, { CartEntity } from 'stores/cart-store.ts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { ArrowLeftOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const CartPage = observer(() => {
  const { items, totalPrice, clearCart, totalCount } = CartStore;
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      {items.length === 0 ? (
        <div className={s.emptyCart}>
          <h2>The shopping cart is empty</h2>
          <Button onClick={() => navigate(routePaths.main)} type={'primary'}>Continue shopping</Button>
        </div>
      ) : (
        <>
          <h2>Cart ({items.length})</h2>
          <div className={s.cartWrapper}>
            <div className={s.orderWrapper}>
              {items.map(el => (
                <CartItem item={el} key={el.id} />
              ))}
              <div className={s.btns}>
                <Button
                  icon={<ArrowLeftOutlined />}
                  type={'primary'}
                  onClick={() => navigate(routePaths.main)}
                >
                  Back to shop
                </Button>
                <Button onClick={clearCart}>Remove all</Button>
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
              <Button type={'primary'}>Buy</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

type CartItemProps = { item: CartEntity };

export const CartItem = observer(({ item }: CartItemProps) => {
  const { addItem, removeItem, removeItems } = CartStore;

  return (
    <div className={s.item}>
      <img src={item.img} alt="img" className={s.img} />
      <div className={s.itemInfo}>
        <div className={s.title}>
          <span>{item.title}</span>
          <span>${item.price}</span>
        </div>
        <div className={s.controlWrapper}>
          <div className={s.control}>
            <Button danger onClick={() => removeItems(item.id)}>Remove</Button>
            <Button
              className={s.controlItem}
              type={'text'}
              icon={<MinusOutlined />}
              onClick={() => removeItem(item.id)}
              disabled={item.count === 1}
            />
            <span className={s.controlItem}>{item.count}</span>
            <Button
              className={s.controlItem}
              onClick={() => addItem(item)}
              type={'text'}
              icon={<PlusOutlined />}
            />
          </div>
        </div>
      </div>
    </div>
  );
});