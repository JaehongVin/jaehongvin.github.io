'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, Ref } from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-px-8 font-500 transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-gray-900 text-white hover:bg-gray-800',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        ghost: 'hover:bg-gray-100',
        outline: 'border border-gray-200 bg-transparent hover:bg-gray-100',
      },
      size: {
        sm: 'h-32 px-12 text-px-14',
        md: 'h-40 px-16 text-px-16',
        lg: 'h-48 px-24 text-px-18',
        icon: 'size-40',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: Ref<HTMLButtonElement>;
}

const Button = ({ className, variant, size, ref, ...props }: ButtonProps) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  />
);

export { Button, buttonVariants };
export type { ButtonProps };
