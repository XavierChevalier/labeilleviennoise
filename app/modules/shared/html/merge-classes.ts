import { twMerge } from 'tailwind-merge'

export const mergeClasses = (...args: (string | unknown)[]) =>
  twMerge(args.filter(Boolean).join(' '))
