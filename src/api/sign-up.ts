import { api } from './api.ts';
import { SignInFormType } from 'components/sign-in-form/use-sign-in.ts';
import { User } from 'stores/user-store.ts';

type Response = {
  accessToken: string;
  user: User;
};

export const signUp = async (body: SignInFormType) => {
  const res = await api.post<Response>('signup', body);
  return res;
};
