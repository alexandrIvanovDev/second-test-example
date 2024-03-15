import s from './main.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product, ProductCard } from 'components/product-card/product-card.tsx';
import { Spin } from 'antd';

export const MainPage = () => {
  const [data, setData] = useState<null | Product[]>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      axios.get('http://localhost:3000/products', { params: { '_limit': 8 } }).then(res => {
        setData(res.data);
      });
    } catch (e) {
      console.warn(e);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className={s.container}>
      {isLoading && <div className={s.spinnerWrapper}><Spin /></div>}
      {data && data.map(el => (
        <ProductCard product={el} key={el.id} />
      ))}
    </div>
  );
};