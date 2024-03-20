import { Router } from 'app/providers/router/router.tsx';
import { RootStoreContext } from 'app/providers/root-store-context/root-store-context.tsx';
import { RootStore } from 'stores/root-store.ts';
import { useMemo } from 'react';

const App = () => {
  const rootStore = useMemo(() => new RootStore(), []);
  return (
    <RootStoreContext.Provider value={rootStore}>
      <Router />
    </RootStoreContext.Provider>
  );
};

export default App;
