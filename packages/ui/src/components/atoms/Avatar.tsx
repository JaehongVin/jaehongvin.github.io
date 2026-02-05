'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { type ImgHTMLAttributes, type Ref, useState } from 'react';
import { cn } from '../../lib/utils';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full bg-gray-100 ring-2 ring-white/80 shadow-sm',
  {
    variants: {
      size: {
        sm: 'size-32',
        md: 'size-40',
        lg: 'size-64',
        xl: 'size-96',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof avatarVariants> & {
    fallback?: string;
    ref?: Ref<HTMLSpanElement>;
  };

function Avatar({
  className,
  size,
  src,
  alt,
  fallback,
  ref,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const showFallback = !src || hasError;

  return (
    <span ref={ref} className={cn(avatarVariants({ size, className }))}>
      {showFallback ? (
        <span className="flex-center size-full rounded-full bg-gray-200 text-px-14 font-500 text-gray-600">
          {fallback || alt?.charAt(0)?.toUpperCase() || '?'}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="aspect-square size-full object-cover"
          onError={() => setHasError(true)}
          {...props}
        />
      )}
    </span>
  );
}

export { Avatar, avatarVariants };
export type { AvatarProps };
