import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-px-6 text-px-12 font-500 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-white',
        secondary: 'bg-gray-100 text-gray-900',
        outline: 'border border-gray-200 text-gray-700',
      },
      size: {
        sm: 'px-8 py-2',
        md: 'px-10 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
export type { BadgeProps };
