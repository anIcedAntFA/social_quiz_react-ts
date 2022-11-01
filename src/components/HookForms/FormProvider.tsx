import { ReactNode } from 'react';
import { FormProvider as RHFFormProvider, UseFormReturn } from 'react-hook-form';

interface IFormProvider<Type extends Record<string, any>> {
  methods: UseFormReturn<Type>;
  onSubmit: () => void;
  children: ReactNode;
}

export default function FormProvider<Type extends Record<string, any>>({
  methods,
  onSubmit,
  children,
}: IFormProvider<Type>) {
  return (
    <RHFFormProvider {...methods}>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        {children}
      </form>
    </RHFFormProvider>
  );
}
