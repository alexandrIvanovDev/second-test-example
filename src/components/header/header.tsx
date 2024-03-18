import { Header as AntdHeader } from 'antd/es/layout/layout';
import s from './header.module.scss';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import logo from 'assets/logo.svg';
import { Button } from 'components/button/button.tsx';
import { Link } from 'react-router-dom';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { observer } from 'mobx-react-lite';
import UserStore from 'stores/user-store.ts';

export const Header = observer(() => {
  const { isAuth } = UserStore;

  return (
    <AntdHeader className={s.header}>
      <div className={s.container}>
        <Link to={routePaths.main} className={s.logo}>
          <img src={logo} alt="logo" />
        </Link>
        {/*<Button>About us</Button>*/}
        {/*<Input className={s.input} placeholder="Search" />*/}
        <div className={s.links}>
          <Link to={routePaths.profile}>
            <Button className={s.outlinedButton} variant={'outlined'}>
              <UserOutlined />
              <span className={s.text}>Profile</span>
            </Button>
          </Link>
          {isAuth && (
            <Button className={s.outlinedButton} variant={'outlined'}>
              <HeartOutlined />
              <span className={s.text}>Favourites</span>
            </Button>
          )}
          <Link to={routePaths.cart}>
            <Button className={s.outlinedButton} variant={'outlined'}>
              <ShoppingCartOutlined />
              <span className={s.text}>My cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </AntdHeader>
  );
});