import { api } from 'api/api.ts';
import { Product } from 'stores/products-store.ts';

export const fetchProducts =
  async (page?: number, limit?: number, term?: string, category?: string) => {
    const res = await api.get<Product[]>(`products`, {
      params: {
        title_like: term || null,
        category_like: category || null,
        _page: page,
        _limit: limit,
      },
    });
    return res.data;
  };
