import { api } from 'api/api.ts';
import { Product } from 'stores/products-store.ts';

export const fetchProducts = async (page?: number, limit?: number) => {
  const res = await api.get<Product[]>('products', {
    params: { _limit: limit || 8, _page: page || 1 },
  });
  return res.data;
};
