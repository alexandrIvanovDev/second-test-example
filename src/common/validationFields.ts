import { z } from 'zod';

export const genericPasswordConstraint = z
  .string()
  .trim()
  .min(4, { message: 'Password must be longer than 3 characters' });

export const genericEmailConstraint = z.string().email();

export const genericNameConstraint = z.string().min(1).max(18);