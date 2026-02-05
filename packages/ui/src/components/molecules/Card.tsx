import type { HTMLAttributes, Ref } from 'react';
import { cn } from '../../lib/utils';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

function Card({ className, ref, ...props }: CardProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-px-12 border border-white/50 bg-white/70 shadow-[0_4px_12px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.03)] backdrop-blur-px-12 transition-all duration-200',
        'hover:bg-white/90 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)]',
        className,
      )}
      {...props}
    />
  );
}

type CardHeaderProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

function CardHeader({ className, ref, ...props }: CardHeaderProps) {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-px-2 p-16', className)}
      {...props}
    />
  );
}

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  ref?: Ref<HTMLParagraphElement>;
};

function CardTitle({ className, ref, ...props }: CardTitleProps) {
  return (
    <h3
      ref={ref}
      className={cn('text-px-14 font-600 text-gray-900', className)}
      {...props}
    />
  );
}

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement> & {
  ref?: Ref<HTMLParagraphElement>;
};

function CardDescription({ className, ref, ...props }: CardDescriptionProps) {
  return (
    <p
      ref={ref}
      className={cn('text-px-12 text-gray-500', className)}
      {...props}
    />
  );
}

type CardContentProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

function CardContent({ className, ref, ...props }: CardContentProps) {
  return <div ref={ref} className={cn('p-16 pt-0', className)} {...props} />;
}

type CardFooterProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

function CardFooter({ className, ref, ...props }: CardFooterProps) {
  return (
    <div
      ref={ref}
      className={cn('flex items-center p-16 pt-0', className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
};
