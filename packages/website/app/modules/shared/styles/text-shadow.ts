const createTextShadowString = (strokeSize: number, color: string) =>
  `${strokeSize}px 0 ${color},
   -${strokeSize}px 0 ${color},
   0 ${strokeSize}px ${color},
   0 -${strokeSize}px ${color}
  `

export const createTextShadow = (strokeSize: number, color: string): string => {
  if (strokeSize === 0) return ''

  return [
    createTextShadowString(strokeSize, color),
    createTextShadow(strokeSize - 1, color),
  ]
    .filter(Boolean)
    .join(',')
}
