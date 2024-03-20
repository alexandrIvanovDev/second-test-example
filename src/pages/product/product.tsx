import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from 'stores/products-store.ts';
import { observer } from 'mobx-react-lite';
import { Rating } from 'components/ui/rating/rating.tsx';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { useStores } from 'app/providers/root-store-context';
import s from './product.module.scss';

export const ProductPage = observer(() => {
  const { id } = useParams();

  const {
    products: { getProduct },
    cart: { addItem },
  } = useStores();

  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const newProduct = getProduct(id as string);
    setProduct?.(newProduct as Product);
  }, [getProduct, id]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addItem(product);
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
        {product.specifications && (
          <>
            <h4 className={s.specificationsTitle}>Specifications</h4>
            <div className={s.specifications}>
              {product.specifications?.map((el) => (
                <div
                  key={el.id}
                  className={el.id % 2 ? s.oddRow : s.evenRow}
                >
                  {el.title}: {el.description}
                </div>
              ))}
            </div>
          </>
        )}
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
          type="primary"
        >
          Back
        </Button>
      </div>
    </div>
  );
});
