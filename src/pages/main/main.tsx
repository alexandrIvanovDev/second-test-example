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

const options = [
  { value: '', label: <span>All</span> },
  { value: 'Laptops', label: <span>Laptops</span> },
  { value: 'Phones', label: <span>Phones</span> },
  { value: 'Tablets', label: <span>Tablets</span> },
];

export const MainPage = observer(() => {
  const { products, isLoading, getProducts } = ProductsStore;
  const { selectedOption, setSelectedOption, searchTerm, setSearchTerm, clearFilter } = FilterStore;
  const { page, setPage, limit } = PaginationStore;

  // const [page, setPage] = useState(1);
  // const [limit] = useState(8);

  const onChangePage = (page: number) => {
    setPage(page);
  };

  const debouncedTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    getProducts(page, limit, debouncedTerm, selectedOption);
  }, [page, limit, debouncedTerm, selectedOption]);

  return (
    <div className={s.container}>
      {isLoading && (
        <div className={s.spinnerWrapper}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
        </div>
      )}
      <Filter
        value={searchTerm}
        setValue={setSearchTerm}
        options={options}
        selectedOption={selectedOption}
        onChangeOption={setSelectedOption}
        clearFilter={clearFilter}
      />
      {products.length ? (
        <div>
          <div className={s.products}>
            {products.map((el) => <ProductCard product={el} key={el.id} />)}
          </div>
          <Pagination
            onChange={onChangePage}
            defaultCurrent={page}
            total={20}
            style={{ marginBottom: 20 }}
          />
        </div>
      ) : (
        <h3 className={s.noContentTitle}>No content with these terms...</h3>
      )}
    </div>
  );
});
