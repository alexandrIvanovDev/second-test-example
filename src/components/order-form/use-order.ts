import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { genericEmailConstraint, genericNameConstraint } from 'common/validationFields.ts';

const orderSchema = z.object({
  firstname: genericNameConstraint,
  lastname: genericNameConstraint,
  email: genericEmailConstraint,
});

export type OrderFormType = z.infer<typeof orderSchema>;

export const useOrder = (email?: string) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OrderFormType>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: email || '',
    },
  });

  return { handleSubmit, errors, control };
};
