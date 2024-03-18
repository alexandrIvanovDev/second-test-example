import { Layout } from 'components/layout/layout.tsx';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { routePaths } from './routePaths.tsx';
import { MainPage } from 'pages/main/main.tsx';
import { CartPage } from 'pages/cart/cart.tsx';
import { ProductPage } from 'pages/product/product.tsx';
import { ProfilePage } from 'pages/profile/profile.tsx';
import { SignInPage } from 'pages/sign-in/sign-in.tsx';
import { SignUpPage } from 'pages/sign-up/sign-up.tsx';
import { NotFoundPage } from 'pages/not-found/not-found.tsx';
import { ErrorBoundary } from 'app/providers/errorBoudary';

const routes: RouteObject[] = [
  { path: routePaths.main, element: <MainPage /> },
  { path: routePaths.cart, element: <CartPage /> },
  { path: routePaths.product, element: <ProductPage /> },
  { path: routePaths.profile, element: <ProfilePage /> },
  { path: routePaths.signIn, element: <SignInPage /> },
  { path: routePaths.signUp, element: <SignUpPage /> },
  { path: routePaths.notFound, element: <NotFoundPage /> },
];

const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [...routes],
  },
]);

export const Router = () => <RouterProvider router={router} />;
