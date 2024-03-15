import { Header as AntdHeader } from 'antd/es/layout/layout';
import s from './header.module.scss';
import { Input } from 'antd';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import logo from 'assets/logo.svg';
import { Button } from 'components/button/button.tsx';

export const Header = () => {
  return (
    <AntdHeader className={s.header}>
      <div className={s.container}>
        {/*<Link to={routePaths.main}>*/}
        <img src={logo} alt="logo" />
        {/*</Link>*/}
        <Button>About us</Button>
        <Input className={s.input} placeholder="Search" />
        <Button className={s.outlinedButton} variant={'outlined'}>
          <UserOutlined />
          <span className={s.text}>Profile</span>
        </Button>
        <Button className={s.outlinedButton} variant={'outlined'}>
          <HeartOutlined />
          <span className={s.text}>Favourites</span>
        </Button>
        <Button className={s.outlinedButton} variant={'outlined'}>
          <ShoppingCartOutlined />
          <span className={s.text}>My cart</span>
        </Button>
      </div>
    </AntdHeader>
  );
};