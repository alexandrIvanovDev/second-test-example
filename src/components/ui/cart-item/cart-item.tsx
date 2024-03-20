import { CartEntity } from 'stores/cart-store.ts';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Product } from 'stores/products-store.ts';
import s from './cart-item.module.scss';

type CartItemProps = {
  item: CartEntity;
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  removeItems: (id: string) => void;
};

export const CartItem = observer((props: CartItemProps) => {
  const {
    item, removeItems, removeItem, addItem,
  } = props;

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
            <Button size="small" danger onClick={() => removeItems(item.id)}>Remove</Button>
            <Button
              className={s.controlItem}
              type="text"
              icon={<MinusOutlined />}
              onClick={() => removeItem(item.id)}
              disabled={item.count === 1}
            />
            <span className={s.controlItem}>{item.count}</span>
            <Button
              className={s.controlItem}
              onClick={() => addItem(item)}
              type="text"
              icon={<PlusOutlined />}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
