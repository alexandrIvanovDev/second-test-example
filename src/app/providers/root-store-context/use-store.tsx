import { useContext } from 'react';
import { RootStoreContext } from './root-store-context.tsx';

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error('Some error!');
  }

  return context;
};
