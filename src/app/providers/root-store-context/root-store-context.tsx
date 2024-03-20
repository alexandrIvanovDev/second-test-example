import { createContext } from 'react';
import { RootStore } from 'stores/root-store.ts';

export const RootStoreContext = createContext<RootStore | null>(null);
