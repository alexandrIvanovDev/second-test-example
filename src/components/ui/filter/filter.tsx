import { Button, Input, Select } from 'antd';
import { Option } from 'common/manufacturer-options.tsx';
import s from './filter.module.scss';

type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  categoriesOptions: Option[];
  selectedCategoriesOption: string | undefined;
  onChangeCategoriesOption: (value: string) => void;
  manufacturerOptions: Option[];
  selectedManufacturerOption: string | undefined;
  onChangeManufacturerOption: (value: string) => void;
  clearFilter: () => void;
}

export const Filter = (props: Props) => {
  const {
    searchValue,
    setSearchValue,
    categoriesOptions,
    selectedCategoriesOption,
    onChangeCategoriesOption,
    clearFilter,
    manufacturerOptions,
    selectedManufacturerOption,
    onChangeManufacturerOption,
  } = props;

  return (
    <div className={s.wrapper}>
      <Input
        className={s.search}
        placeholder="Search product..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        allowClear
      />
      <div className={s.selectWrapper}>
        <span className={s.selectLabel}>Category</span>
        <Select
          options={categoriesOptions}
          value={selectedCategoriesOption}
          onSelect={onChangeCategoriesOption}
          className={s.select}
        />
      </div>
      <div className={s.selectWrapper}>
        <span className={s.selectLabel}>Manufacturer</span>
        <Select
          options={manufacturerOptions}
          value={selectedManufacturerOption}
          onSelect={onChangeManufacturerOption}
          className={s.select}
        />
      </div>
      <Button
        onClick={clearFilter}
        type={searchValue || selectedCategoriesOption || selectedManufacturerOption
          ? 'primary' : 'default'}
      >
        Clear filter
      </Button>
    </div>
  );
};
