import { useEffect } from 'react';
import { ProductCard } from 'components/ui/product-card/product-card.tsx';
import { Pagination, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { LoadingOutlined } from '@ant-design/icons';
import { Filter } from 'components/ui/filter/filter.tsx';
import { useDebounce } from 'common/use-debounce.ts';
import { categoriesOptions } from 'common/categories-options.tsx';
import { manufacturerOptions } from 'common/manufacturer-options.tsx';
import { useStores } from 'app/providers/root-store-context/use-store.tsx';
import s from './main.module.scss';

export const MainPage = observer(() => {
  const {
    pagination: { currentPage, setCurrentPage, limit },
    products: { products, isLoading, getProducts },
    cart: { addItem },
    filter: {
      clearFilter,
      manufacturerOption,
      onChangeManufacturer,
      categoriesOption,
      onChangeCategory,
      searchTerm,
      setSearchTerm,
    },
  } = useStores();

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const debouncedTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    getProducts(currentPage, limit, debouncedTerm, categoriesOption, manufacturerOption);
  }, [currentPage, limit, debouncedTerm, categoriesOption, manufacturerOption, getProducts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedTerm, categoriesOption, manufacturerOption, setCurrentPage]);

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
            {products.map((el) => (
              <ProductCard product={el} key={el.id} addToCart={addItem} />
            ))}
          </div>
          <Pagination
            current={currentPage}
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
