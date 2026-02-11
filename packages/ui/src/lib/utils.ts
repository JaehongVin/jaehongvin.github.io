import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        { 'text-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      leading: [
        { 'leading-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      tracking: [
        { 'tracking-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      gap: [{ 'gap-px': [(value: string) => !Number.isNaN(Number(value))] }],
      'gap-x': [
        { 'gap-x-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      'gap-y': [
        { 'gap-y-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      top: [{ 'top-px': [(value: string) => !Number.isNaN(Number(value))] }],
      right: [
        { 'right-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      bottom: [
        { 'bottom-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      left: [{ 'left-px': [(value: string) => !Number.isNaN(Number(value))] }],
      inset: [
        { 'inset-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      'min-w': [
        { 'min-w-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      'max-w': [
        { 'max-w-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      'min-h': [
        { 'min-h-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      'max-h': [
        { 'max-h-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      size: [{ 'size-px': [(value: string) => !Number.isNaN(Number(value))] }],
      rounded: [
        { 'rounded-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      'border-w': [
        { 'border-px': [(value: string) => !Number.isNaN(Number(value))] },
      ],
      blur: [{ 'blur-px': [(value: string) => !Number.isNaN(Number(value))] }],
      'backdrop-blur': [
        {
          'backdrop-blur-px': [(value: string) => !Number.isNaN(Number(value))],
        },
      ],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
