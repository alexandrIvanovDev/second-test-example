import { observer } from 'mobx-react-lite';
import UserStore from 'stores/user-store.ts';
import { Navigate } from 'react-router-dom';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { Button } from 'antd';
import OrdersStore from 'stores/orders-store.ts';
import { clsx } from 'clsx';
import s from './profile.module.scss';

export const ProfilePage = observer(() => {
  const { isAuth, user, logout } = UserStore;
  const { orderItems, clearOrderHistory } = OrdersStore;

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
              {orderItems.map((el, i) => (
                <tr key={i} className={s.row}>
                  <td className={s.cell}>
                    <img src={el.img} alt="img" className={s.img} />
                  </td>
                  <td className={s.cell}>{el.title}</td>
                  <td className={s.cell}>{el.price}</td>
                  <td className={s.cell}>{el.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <div className={clsx(s.btns, !isOrderItemsExist && s.oneBtn)}>
        {isOrderItemsExist
          && <Button danger type="primary" onClick={clearOrderHistory}>Clear order history</Button>}
        <Button type="primary" onClick={logout} className={s.logoutBtn}>Logout</Button>
      </div>
    </div>
  );
});
