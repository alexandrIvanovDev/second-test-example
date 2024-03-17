import s from './sign-up.module.scss';
import { SignUpFormType, useSignUp } from './use-sign-up.ts';
import { Controller } from 'react-hook-form';
import { Input } from 'components/input/input.tsx';
import { Button } from 'components/button/button.tsx';

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
        render={({ field }) => <Input
          {...field}
          error={errors.email?.message}
          label={'Email'}
        />}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => <Input
          type="password"
          {...field}
          error={errors.password?.message}
          label={'Password'}
        />}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => <Input
          type="password"
          {...field}
          error={errors.confirmPassword?.message}
          label={'Password'}
        />}
      />
      <Button className={s.btn} htmlType={'submit'}>Sign Up</Button>
    </form>
  );
};
