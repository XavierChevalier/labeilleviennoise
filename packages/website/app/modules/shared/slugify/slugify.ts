export const slugify = (string: string) =>
  string
    .normalize()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s$*_+~.()'"!\-:@]+/g, '')
    .replace(/[\s$*_+~.()'"!\-:@]+/g, '-')
