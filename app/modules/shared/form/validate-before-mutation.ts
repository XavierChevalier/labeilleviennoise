export const validateBeforeMutation =
  <T extends Record<string, unknown>>(validationFn: (input: T) => void) =>
  (mutationFn: (input: T) => Promise<unknown>) =>
  (input: T) => {
    validationFn(input)
    return mutationFn(input)
  }
