import { Input } from 'components/input/input.tsx';
import { Controller } from 'react-hook-form';
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import CartStore from 'stores/cart-store.ts';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import UserStore from 'stores/user-store.ts';
import { OrderFormType, useOrder } from './use-order.ts';
import s from './order-form.module.scss';

type Props = {
  onSubmit: (data: OrderFormType) => void
};

export const OrderForm = ({ onSubmit }: Props) => {
  const { user } = UserStore;
  const { handleSubmit, errors, control } = useOrder(user?.email);
  const [modal, contextHolder] = Modal.useModal();

  const navigate = useNavigate();
  const { clearCart } = CartStore;

  const countDown = () => {
    let secondsToGo = 3;

    const instance = modal.success({
      title: 'Success',
      content: 'Your order has been successfully created. We will contact you as soon as possible',
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
      navigate(routePaths.main);
      clearCart();
    }, secondsToGo * 1000);
  };

  const submitForm = (data: OrderFormType) => {
    onSubmit(data);
    countDown();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className={s.form}>
      <Controller
        name="firstname"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            error={errors.firstname?.message}
            label="Firstname"
          />
        )}
      />
      <Controller
        name="lastname"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            error={errors.lastname?.message}
            label="Lastname"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            error={errors.email?.message}
            label="Email"
          />
        )}
      />
      <Button type="primary" htmlType="submit">Buy</Button>
      {contextHolder}
    </form>
  );
};
