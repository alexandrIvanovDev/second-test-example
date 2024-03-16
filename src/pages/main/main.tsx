import s from './main.module.scss';
import { useEffect } from 'react';
import { ProductCard } from 'components/product-card/product-card.tsx';
import { Spin } from 'antd';
import ProductsStore from 'stores/products-store.ts';
import { observer } from 'mobx-react-lite';

export const MainPage = observer(() => {
  const { products, isLoading, getProducts } = ProductsStore;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={s.container}>
      {isLoading &&
        <div className={s.spinnerWrapper}>
          <Spin />
        </div>
      }
      {products.map((el) => <ProductCard product={el} key={el.id} />)}
    </div>
  );
});
