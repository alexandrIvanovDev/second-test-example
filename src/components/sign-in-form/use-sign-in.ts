import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const passwordConstraint = z
  .string()
  .trim()
  .min(4, { message: 'Password must be longer than 3 characters' });

const signInSchema = z.object({
  email: z.string().email(),
  password: passwordConstraint,
});

export type SignInFormType = z.infer<typeof signInSchema>;

export const useSignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return { handleSubmit, errors, control };
};
