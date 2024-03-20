import { ReactNode } from 'react';
import s from './orders-table.module.scss';

type Props = {
  children: ReactNode
}

export const OrdersTable = ({ children }: Props) => (
  <table className={s.table}>
    <thead className={s.header}>
      <tr>
        <th className={s.cell}>Img</th>
        <th className={s.cell}>Title</th>
        <th className={s.cell}>Price</th>
        <th className={s.cell}>Amount</th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
);
