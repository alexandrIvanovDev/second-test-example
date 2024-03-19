export type Routes = | 'signIn' | 'signUp' | 'main' | 'profile' | 'cart' | 'product' | 'order' | 'notFound';

export const routePaths: Record<Routes, string> = {
  signIn: '/sign-in',
  signUp: '/sign-up',
  main: '/',
  profile: '/profile',
  product: '/products/:id',
  cart: '/cart',
  order: '/order',
  notFound: '/*',
};
