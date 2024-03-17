import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { genericEmailConstraint, genericPasswordConstraint } from 'common/validationFields.ts';

const signUpSchema = z
  .object({
    email: genericEmailConstraint,
    password: genericPasswordConstraint,
    confirmPassword: genericPasswordConstraint,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords don\'t match',
    path: ['confirmPassword'],
  });

export type SignUpFormType = z.infer<typeof signUpSchema>;

export const useSignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  return { handleSubmit, control, errors };
};
