export type Routes = | 'signIn' | 'signUp' | 'main' | 'profile' | 'notFound';

export const routePaths: Record<Routes, string> = {
  signIn: '/sign-in',
  signUp: '/sign-up',
  main: '/',
  profile: '/profile',
  notFound: '/*',
};
