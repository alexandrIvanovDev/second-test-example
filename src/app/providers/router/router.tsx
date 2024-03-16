import { Layout } from 'components/layout/layout.tsx';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { routePaths } from './routePaths.tsx';
import { MainPage } from 'pages/main/main.tsx';
import { CartPage } from 'pages/cart/cart.tsx';
import { ProductPage } from 'pages/product/product.tsx';

const routes: RouteObject[] = [
  { path: routePaths.main, element: <MainPage /> },
  { path: routePaths.cart, element: <CartPage /> },
  { path: routePaths.product, element: <ProductPage /> },
  { path: routePaths.signIn, element: <div>Sign in</div> },
  { path: routePaths.signUp, element: <div>Sign up</div> },
  { path: routePaths.notFound, element: <div>Not found</div> },
];

const router = createBrowserRouter([
  {
    element: (
      // <ErrorBoundary>
      <Layout />
      // </ErrorBoundary>
    ),
    children: [...routes],
  },
]);

export const Router = () => <RouterProvider router={router} />;
