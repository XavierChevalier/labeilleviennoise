export const mergeClasses = (...args: (string | unknown)[]) =>
  args.filter(Boolean).join(' ')
