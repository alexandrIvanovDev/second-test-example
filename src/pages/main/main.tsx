import s from './main.module.scss';
import { useEffect, useState } from 'react';
import { ProductCard } from 'components/product-card/product-card.tsx';
import { Pagination, Spin } from 'antd';
import ProductsStore from 'stores/products-store.ts';
import { observer } from 'mobx-react-lite';
import { LoadingOutlined } from '@ant-design/icons';

export const MainPage = observer(() => {
  const { products, isLoading, getProducts } = ProductsStore;
  const [page, setPage] = useState(1);

  const onChangePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    getProducts(page);
  }, [page]);

  return (
    <div className={s.container}>
      {isLoading && (
        <div className={s.spinnerWrapper}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
        </div>
      )}
      <div>
        <div className={s.products}>
          {products.map((el) => <ProductCard product={el} key={el.id} />)}
        </div>
        <Pagination
          onChange={onChangePage}
          defaultCurrent={page}
          total={20}
        />
      </div>
    </div>
  );
});
