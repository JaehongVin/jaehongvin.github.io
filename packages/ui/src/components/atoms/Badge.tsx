import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center font-500 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-gray-800 text-white shadow-sm',
        secondary:
          'bg-gray-100/80 text-gray-600 backdrop-blur-sm border border-gray-200/50',
        outline:
          'border border-gray-200/60 text-gray-500 bg-white/50 backdrop-blur-sm hover:bg-gray-50/50',
      },
      size: {
        sm: 'rounded-px-4 px-6 py-1 text-px-11',
        md: 'rounded-px-6 px-8 py-2 text-px-12',
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
