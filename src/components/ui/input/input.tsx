import { Input as AntdInput, InputProps } from 'antd';
import { forwardRef } from 'react';
import s from './input.module.scss';

type Props = {
  error?: string;
  className?: string;
  label?: string
} & InputProps;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    error, className, label, ...rest
  } = props;

  return (
    <div className={s.wrapper} ref={ref}>
      {label && <div className={s.label}>{label}</div>}
      {rest.type === 'password'
        ? (
          <AntdInput.Password {...rest} className={className} status={error && 'error'} />
        )
        : (
          <AntdInput {...rest} className={className} status={error && 'error'} />
        )}
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
});
