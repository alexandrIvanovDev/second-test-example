import s from './sign-in.module.scss';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { Link } from 'react-router-dom';
import { SignInFormType } from 'components/sign-in-form/use-sign-in.ts';
import { SignInForm } from 'components/sign-in-form/sign-in-form.tsx';

export const SignInPage = () => {
  const handleLogin = (data: SignInFormType) => {
    console.log(data);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Sign In</h2>
      <SignInForm onSubmit={handleLogin} />
      <div className={s.notification}>
        Don't have an account?
      </div>
      <Link className={s.signUp} to={routePaths.signUp}>
        Sign Up
      </Link>
    </div>
  );
};