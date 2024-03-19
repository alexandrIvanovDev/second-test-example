import { Link } from 'react-router-dom';
import { Rating } from 'components/rating/rating.tsx';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Product } from 'stores/products-store.ts';
import { observer } from 'mobx-react-lite';
import CartStore from 'stores/cart-store.ts';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import s from './product-card.module.scss';

type Props = {
  product: Product;
};

export const ProductCard = observer(({ product }: Props) => {
  const { addItem } = CartStore;

  const handleAddToCart = () => {
    addItem(product);
    toast.success('Added to cart');
  };

  return (
    <div className={s.product}>
      <Link className={s.imgWrapper} to={`/products/${product.id}`}>
        <img src={product.img} alt="product-img" className={s.img} />
      </Link>
      <div className={s.information}>
        <div className={s.wrapper}>
          <div>
            <h3 className={s.price}>${product.price}</h3>
            <div className={s.rating}>
              <Rating rating={Math.round(product.rating)} />
              <span>{product.rating}</span>
            </div>
          </div>
          <Button onClick={handleAddToCart}>
            <ShoppingCartOutlined />
          </Button>
        </div>
        <div className={s.titleWrapper}>
          <Link to={`/products/${product.id}`} className={s.title} title={product.title}>
            {product.title}
          </Link>
        </div>
      </div>
    </div>
  );
});
