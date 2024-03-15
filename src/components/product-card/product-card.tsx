import s from './product-card.module.scss';
import { Link } from 'react-router-dom';
import { Rating } from 'components/rating/rating.tsx';
import { Button } from 'components/button/button.tsx';
import { HeartOutlined } from '@ant-design/icons';

export type Product = {
  id: string,
  category: string,
  manufacturer: string,
  title: string,
  price: string,
  img: string,
  rating: number,
};

type Props = {
  product: Product
};

export const ProductCard = ({ product }: Props) => {
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
          <Button className={s.favouriteBtn}>
            <HeartOutlined />
          </Button>
        </div>
        <Link to={`/products/${product.id}`} className={s.title} title={product.title}>{product.title}</Link>
      </div>
    </div>
  );
};