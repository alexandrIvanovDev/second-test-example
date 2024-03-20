import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { genericEmailConstraint, genericPasswordConstraint } from 'common/validationFields.ts';

const signInSchema = z.object({
  email: genericEmailConstraint,
  password: genericPasswordConstraint,
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
