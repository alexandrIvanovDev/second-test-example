import { Link, Navigate } from 'react-router-dom';

import s from './sign-up.module.scss';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { SignUpForm } from 'components/sign-up-form/sign-up.tsx';
import { SignUpFormType } from 'components/sign-up-form/use-sign-up.ts';
import { signUp } from 'api/sign-up.ts';
import { observer } from 'mobx-react-lite';
import UserStore from 'stores/user-store.ts';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export const SignUpPage = observer(() => {
  const { setUser, setIsAuth, user } = UserStore;

  const handleSignUp = async (data: SignUpFormType) => {
    const { confirmPassword, ...rest } = data;
    try {
      const res = await signUp(rest);
      if (res.status === 201) {
        setUser(res.data.user);
        setIsAuth(true);
        toast.success('Authorized');
      }
    } catch (e) {
      const err = e as AxiosError;
      const message = err.response?.data;
      toast.error(message as string);
    }
  };

  if (user?.id) {
    return <Navigate to={routePaths.profile} />;
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Sign Up</h2>
      <SignUpForm onSubmit={handleSignUp} />
      <div className={s.notification}>
        Already have an account?
      </div>
      <Link to={routePaths.signIn} className={s.link}>
        Sign In
      </Link>
    </div>
  );
});
