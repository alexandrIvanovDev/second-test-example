import { Input } from 'components/input/input.tsx';
import s from './sign-in-form.module.scss';
import { Controller } from 'react-hook-form';
import { SignInFormType, useSignIn } from './use-sign-in.ts';
import { Button } from 'antd';

type Props = {
  onSubmit: (data: SignInFormType) => void
};

export const SignInForm = ({ onSubmit }: Props) => {
  const { handleSubmit, errors, control } = useSignIn();

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
      <Button htmlType={'submit'} type={'primary'} className={s.btn}>Sign In</Button>
    </form>
  );
};
