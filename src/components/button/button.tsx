import { Button as AntdButton, ButtonProps } from 'antd';
import { clsx } from 'clsx';
import s from './button.module.scss';

type Props = {
  variant?: 'outlined' | 'default'
} & ButtonProps;

export const Button = (props: Props) => {
  const { variant = 'default', className, ...rest } = props;
  return <AntdButton className={clsx(s[variant], className)} {...rest} />;
};