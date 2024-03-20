import { Controller } from 'react-hook-form';
import { Input } from 'components/ui/input/input.tsx';
import { Button } from 'antd';
import { SignUpFormType, useSignUp } from './use-sign-up.ts';
import s from './sign-up.module.scss';

type Props = {
  onSubmit: (data: SignUpFormType) => void
};

export const SignUpForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit, errors } = useSignUp();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            type="password"
            {...field}
            error={errors.password?.message}
            label="Password"
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <Input
            type="password"
            {...field}
            error={errors.confirmPassword?.message}
            label="Confirm password"
          />
        )}
      />
      <Button className={s.btn} htmlType="submit" type="primary">Sign Up</Button>
    </form>
  );
};
