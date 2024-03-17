import { Input as AntdInput, InputProps } from 'antd';
import s from './input.module.scss';

type Props = {
  error?: string;
  className?: string;
  label?: string
} & InputProps;


export const Input = (props: Props) => {
  const { error, className, label, ...rest } = props;

  return (
    <div className={s.wrapper}>
      {label && <div className={s.label}>{label}</div>}
      <AntdInput {...rest} />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};