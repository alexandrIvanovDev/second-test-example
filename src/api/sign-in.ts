import { SignInFormType } from 'components/forms/sign-in-form/use-sign-in.ts';
import { api } from 'api/api.ts';

export const signIn = async (body: SignInFormType) => {
  const res = await api.post('signin', body);
  return res;
};
