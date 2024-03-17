import { z } from 'zod';

export const genericPasswordConstraint = z
  .string()
  .trim()
  .min(4, { message: 'Password must be longer than 3 characters' });

export const genericEmailConstraint = z.string().email();