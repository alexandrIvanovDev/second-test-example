import s from './filter.module.scss';
import { Button, Input, Select } from 'antd';

type Props = {
  value: string;
  setValue: (value: string) => void;
  options: any;
  selectedOption: string | undefined;
  onChangeOption: (value: string) => void;
  clearFilter: () => void;
}

export const Filter = (props: Props) => {
  const { value, setValue, options, selectedOption, onChangeOption, clearFilter } = props;

  return (
    <div className={s.wrapper}>
      <Input
        className={s.search}
        placeholder={'Search product...'}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        allowClear
      />
      <Select
        options={options}
        value={selectedOption}
        onSelect={onChangeOption}
        className={s.select}
      />
      <Button onClick={clearFilter} type={value || selectedOption ? 'primary' : 'default'}>Clear filter</Button>
    </div>
  );
};