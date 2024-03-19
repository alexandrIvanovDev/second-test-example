import { makeAutoObservable, runInAction } from 'mobx';
import { fetchProducts } from 'api/fetch-products.ts';

type Specifications = {
  id: number;
  description: string;
  title: string;
};

export type Product = {
  id: string;
  category: string;
  manufacturer: string;
  title: string;
  price: string;
  img: string;
  rating: number;
  description: string;
  specifications: Specifications[];
};

class ProductsStore {
  products: Product[] = [];

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getProducts = async (page?: number, limit?: number, category?: string,
                       option?: string, manufacturer?: string) => {
    try {
      this.isLoading = true;
      const res = await fetchProducts(page, limit, category, option, manufacturer);

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
