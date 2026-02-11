'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type { ComponentProps, Ref } from 'react';
import { cn } from '../../lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

interface TooltipContentProps
  extends ComponentProps<typeof TooltipPrimitive.Content> {
  ref?: Ref<HTMLDivElement>;
}

const TooltipContent = ({
  className,
  sideOffset = 4,
  ref,
  ...props
}: TooltipContentProps) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-px-6 bg-gray-900 px-12 py-6 text-px-12 text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
);

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
export type { TooltipContentProps };
