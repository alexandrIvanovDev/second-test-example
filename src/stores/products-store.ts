import { makeAutoObservable, runInAction } from 'mobx';
import { fetchProducts } from 'api/fetch-products.ts';

export type Product = {
  id: string;
  category: string;
  manufacturer: string;
  title: string;
  price: string;
  img: string;
  rating: number;
  description: string;
};

class ProductsStore {
  products: Product[] = [];

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getProducts = async (limit?: number, page?: number) => {
    try {
      this.isLoading = true;
      const res = await fetchProducts(limit, page);

      runInAction(() => {
        this.products = res;
        this.isLoading = false;
      });
    } catch (e) {
      this.isLoading = true;
    }
  };

  getProduct = (id: string) => {
    return this.products.find(el => el.id === id);
  };
}

export default new ProductsStore();