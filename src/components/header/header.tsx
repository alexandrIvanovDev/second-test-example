import { Header as AntdHeader } from 'antd/es/layout/layout';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import logo from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { observer } from 'mobx-react-lite';
import CartStore from 'stores/cart-store.ts';
import { Button } from 'antd';
import s from './header.module.scss';

export const Header = observer(() => {
  const { items } = CartStore;

  return (
    <AntdHeader className={s.header}>
      <div className={s.container}>
        <Link to={routePaths.main} className={s.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={s.links}>
          <Link to={routePaths.profile}>
            <Button className={s.outlinedButton} type="link">
              <UserOutlined />
              <span className={s.text}>Profile</span>
            </Button>
          </Link>
          <Link to={routePaths.cart} className={s.cart}>
            <Button className={s.outlinedButton} type="link">
              <ShoppingCartOutlined />
              <span className={s.text}>My cart</span>
            </Button>
            {!!items.length && <div className={s.cartItems}>{items.length}</div>}
          </Link>
        </div>
      </div>
    </AntdHeader>
  );
});
