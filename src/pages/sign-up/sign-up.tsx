import { Link, Navigate } from 'react-router-dom';

import s from './sign-up.module.scss';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { SignUpForm } from 'components/sign-up-form/sign-up.tsx';
import { SignUpFormType } from 'components/sign-up-form/use-sign-up.ts';
import { createUser } from 'api/create-user.ts';
import { observer } from 'mobx-react-lite';
import UserStore from 'stores/user-store.ts';

export const SignUpPage = observer(() => {
  const { setUser, setIsAuth, user } = UserStore;

  // const handleSignUp = async (data: SignUpFormType) => {
  //   const { confirmPassword, ...rest } = data;
  //   try {
  //     console.log(`Rest: ${rest}`);
  //     const res = await createUser(rest);
  //     setUser(res.user);
  //     setIsAuth(true);
  //     console.log(res);
  //   } catch (e) {
  //     console.warn(e);
  //   }
  // };

  if (user?.id) {
    return <Navigate to={routePaths.main} />;
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
