import s from './product.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductsStore, { Product } from 'stores/products-store.ts';
import { observer } from 'mobx-react-lite';
import { Rating } from 'components/rating/rating.tsx';
import { Button } from 'components/button/button.tsx';
import { ArrowLeftOutlined } from '@ant-design/icons';
import CartStore from 'stores/cart-store.ts';
import { toast } from 'react-toastify';

export const ProductPage = observer(() => {
  const { id } = useParams();
  const { getProduct } = ProductsStore;
  const { addToCart } = CartStore;
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const newProduct = getProduct(id as string);
    setProduct?.(newProduct as Product);
  }, []);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart');
  };

  return (
    <div className={s.wrapper}>
      <img src={product.img} alt="img" className={s.img} />
      <div className={s.information}>
        <h3 className={s.title}>{product.title}</h3>
        <span className={s.description}>{product.description}</span>
        <div className={s.rating}>
          <Rating rating={Math.round(product.rating)} /> {product.rating}
        </div>
        <span className={s.addedInfo}>Category: {product.category}</span>
        <span className={s.addedInfo}>Manufacturer: {product.manufacturer}</span>
        <h4 style={{ margin: 0 }}>Specifications</h4>
        <div className={s.specifications}>
          {product.specifications?.map(el => (
            <div key={el.id} className={el.id % 2 ? s.one : s.two}>{el.title}: {el.description}</div>
          ))}
        </div>
      </div>
      <div className={s.rightColumn}>
        <div className={s.cartWrapper}>
          <div className={s.price}>Price: ${product.price}</div>
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
        <Button
          onClick={() => navigate(-1)}
          icon={<ArrowLeftOutlined />}
          className={s.backButton}
        >
          Back
        </Button>
      </div>
    </div>
  );
});
