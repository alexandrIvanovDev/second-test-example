import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { Button } from 'antd';
import { clsx } from 'clsx';
import { useStores } from 'app/providers/root-store-context';
import { OrdersTable } from 'components/ui/orders-table/orders-table.tsx';
import s from './profile.module.scss';

export const ProfilePage = observer(() => {
  const {
    user: { user, isAuth, logout },
    orders: { orderItems, clearOrderHistory },
  } = useStores();

  const isOrderItemsExist = orderItems.length > 0;

  if (!isAuth) {
    return <Navigate to={routePaths.signIn} />;
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Profile</h2>
      <div>Your email: {user?.email}</div>
      {isOrderItemsExist && (
        <>
          <div className={s.orderTitle}>Your orders:</div>
          <OrdersTable>
            {orderItems.map((el, i) => (
                  // eslint-disable-next-line
                  <tr key={i} className={s.tableRow}>
                    <td className={s.tableCell}>
                      <img src={el.img} alt="img" className={s.img} />
                    </td>
                    <td className={s.tableCell}>{el.title}</td>
                    <td className={s.tableCell}>{el.price}</td>
                    <td className={s.tableCell}>{el.count}</td>
                  </tr>
            ))}
          </OrdersTable>
        </>
      )}
      <div className={clsx(s.btns, !isOrderItemsExist && s.oneBtn)}>
        {isOrderItemsExist && (
        <Button danger type="primary" onClick={clearOrderHistory}>Clear order history</Button>
        )}
        <Button type="primary" onClick={logout} className={s.logoutBtn}>Logout</Button>
      </div>
    </div>
  );
});
