import s from './main.module.scss';
import { useEffect } from 'react';
import { ProductCard } from 'components/product-card/product-card.tsx';
import { Pagination, Spin } from 'antd';
import ProductsStore from 'stores/products-store.ts';
import { observer } from 'mobx-react-lite';
import { LoadingOutlined } from '@ant-design/icons';
import { Filter } from 'components/filter/filter.tsx';
import { useDebounce } from 'common/use-debounce.ts';
import FilterStore from 'stores/filter-store.ts';
import PaginationStore from 'stores/pagination-store.ts';
import { categoriesOptions } from 'common/categories-options.tsx';
import { manufacturerOptions } from 'common/manufacturer-options.tsx';

export const MainPage = observer(() => {
  const { products, isLoading, getProducts } = ProductsStore;
  const { page, setPage, limit } = PaginationStore;
  const {
    categoriesOption,
    onChangeCategory,
    searchTerm,
    setSearchTerm,
    clearFilter,
    manufacturerOption,
    onChangeManufacturer,
  } = FilterStore;

  const onChangePage = (page: number) => {
    setPage(page);
  };

  const debouncedTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    getProducts(page, limit, debouncedTerm, categoriesOption, manufacturerOption);
  }, [page, limit, debouncedTerm, categoriesOption, manufacturerOption]);

  useEffect(() => {
    setPage(1);
  }, [debouncedTerm, categoriesOption, manufacturerOption]);

  return (
    <div className={s.container}>
      {isLoading && (
        <div className={s.spinnerWrapper}>
          <Spin indicator={<LoadingOutlined className={s.spinner} spin />} />
        </div>
      )}
      <Filter
        searchValue={searchTerm}
        setSearchValue={setSearchTerm}
        categoriesOptions={categoriesOptions}
        selectedCategoriesOption={categoriesOption}
        onChangeCategoriesOption={onChangeCategory}
        clearFilter={clearFilter}
        manufacturerOptions={manufacturerOptions}
        selectedManufacturerOption={manufacturerOption}
        onChangeManufacturerOption={onChangeManufacturer}
      />
      {products.length ? (
        <div>
          <div className={s.products}>
            {products.map((el) => <ProductCard product={el} key={el.id} />)}
          </div>
          <Pagination
            current={page}
            onChange={onChangePage}
            total={20}
            className={s.pagination}
          />
        </div>
      ) : (
        <h3 className={s.noContentTitle}>No content with these terms...</h3>
      )}
    </div>
  );
});
