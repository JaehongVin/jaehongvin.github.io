'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import type { ComponentProps, HTMLAttributes, Ref } from 'react';
import { cn } from '../../lib/utils';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

interface DialogOverlayProps
  extends ComponentProps<typeof DialogPrimitive.Overlay> {
  ref?: Ref<HTMLDivElement>;
}

const DialogOverlay = ({ className, ref, ...props }: DialogOverlayProps) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
);

interface DialogContentProps
  extends ComponentProps<typeof DialogPrimitive.Content> {
  ref?: Ref<HTMLDivElement>;
}

const DialogContent = ({
  className,
  children,
  ref,
  ...props
}: DialogContentProps) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 w-full max-w-px-450 -translate-x-1/2 -translate-y-1/2 rounded-px-16 border border-gray-200 bg-white p-24 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
);

interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div
    className={cn('flex flex-col gap-px-8 text-center tb:text-left', className)}
    {...props}
  />
);

interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {}

const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
  <div
    className={cn(
      'flex flex-col-reverse gap-px-8 tb:flex-row tb:justify-end',
      className,
    )}
    {...props}
  />
);

interface DialogTitleProps
  extends ComponentProps<typeof DialogPrimitive.Title> {
  ref?: Ref<HTMLHeadingElement>;
}

const DialogTitle = ({ className, ref, ...props }: DialogTitleProps) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-px-18 font-600 text-gray-900', className)}
    {...props}
  />
);

interface DialogDescriptionProps
  extends ComponentProps<typeof DialogPrimitive.Description> {
  ref?: Ref<HTMLParagraphElement>;
}

const DialogDescription = ({
  className,
  ref,
  ...props
}: DialogDescriptionProps) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-px-14 text-gray-500', className)}
    {...props}
  />
);

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
export type {
  DialogOverlayProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
};
