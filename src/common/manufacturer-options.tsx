import { ReactNode } from 'react';

export type Option = {
  value: string;
  label: ReactNode;
}

export const manufacturerOptions: Option[] = [
  { value: '', label: <span>All</span> },
  { value: 'Apple', label: <span>Apple</span> },
  { value: 'Samsung', label: <span>Samsung</span> },
];
