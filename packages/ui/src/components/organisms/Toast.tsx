'use client';

import * as ToastPrimitive from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactElement, Ref } from 'react';
import { cn } from '../../lib/utils';

const ToastProvider = ToastPrimitive.Provider;

type ToastViewportProps = ComponentProps<typeof ToastPrimitive.Viewport> & {
  ref?: Ref<HTMLOListElement>;
};

function ToastViewport({ className, ref, ...props }: ToastViewportProps) {
  return (
    <ToastPrimitive.Viewport
      ref={ref}
      className={cn(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-px-8 p-16 tb:bottom-0 tb:right-0 tb:top-auto tb:flex-col tb:max-w-px-420',
        className,
      )}
      {...props}
    />
  );
}

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between gap-px-16 overflow-hidden rounded-px-8 border p-16 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:tb:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border-gray-200 bg-white text-gray-900',
        destructive: 'border-red-500/50 bg-red-500 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type ToastProps = ComponentProps<typeof ToastPrimitive.Root> &
  VariantProps<typeof toastVariants> & {
    ref?: Ref<HTMLLIElement>;
  };

function Toast({ className, variant, ref, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
}

type ToastActionProps = ComponentProps<typeof ToastPrimitive.Action> & {
  ref?: Ref<HTMLButtonElement>;
};

function ToastAction({ className, ref, ...props }: ToastActionProps) {
  return (
    <ToastPrimitive.Action
      ref={ref}
      className={cn(
        'inline-flex h-32 shrink-0 items-center justify-center rounded-px-6 border border-gray-200 bg-transparent px-12 text-px-12 font-500 transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

type ToastCloseProps = ComponentProps<typeof ToastPrimitive.Close> & {
  ref?: Ref<HTMLButtonElement>;
};

function ToastClose({ className, ref, ...props }: ToastCloseProps) {
  return (
    <ToastPrimitive.Close
      ref={ref}
      className={cn(
        'absolute right-8 top-8 rounded-px-4 p-4 opacity-0 transition-opacity hover:text-gray-900 focus:opacity-100 focus:outline-none group-hover:opacity-100',
        className,
      )}
      toast-close=""
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </ToastPrimitive.Close>
  );
}

type ToastTitleProps = ComponentProps<typeof ToastPrimitive.Title> & {
  ref?: Ref<HTMLDivElement>;
};

function ToastTitle({ className, ref, ...props }: ToastTitleProps) {
  return (
    <ToastPrimitive.Title
      ref={ref}
      className={cn('text-px-14 font-600', className)}
      {...props}
    />
  );
}

type ToastDescriptionProps = ComponentProps<
  typeof ToastPrimitive.Description
> & {
  ref?: Ref<HTMLDivElement>;
};

function ToastDescription({ className, ref, ...props }: ToastDescriptionProps) {
  return (
    <ToastPrimitive.Description
      ref={ref}
      className={cn('text-px-12 opacity-90', className)}
      {...props}
    />
  );
}

type ToastActionElement = ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
