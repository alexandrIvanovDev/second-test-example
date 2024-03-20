import { routePaths } from 'app/providers/router/routePaths.tsx';
import { Link, Navigate } from 'react-router-dom';
import { SignInFormType } from 'components/forms/sign-in-form/use-sign-in.ts';
import { SignInForm } from 'components/forms/sign-in-form/sign-in-form.tsx';
import { signIn } from 'api/sign-in.ts';
import { observer } from 'mobx-react-lite';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useStores } from 'app/providers/root-store-context';
import s from './sign-in.module.scss';

export const SignInPage = observer(() => {
  const { user: { setUser, setIsAuth, user } } = useStores();

  const handleLogin = async (data: SignInFormType) => {
    try {
      const res = await signIn(data);
      if (res.status === 200) {
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
});
