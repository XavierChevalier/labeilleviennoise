import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { FC, HTMLProps, ReactNode } from 'react'

export interface Props extends HTMLProps<HTMLElement> {
  title: string
  price: number
  isVatIncluded?: boolean
  isPerYear: boolean
  appendChildren?: ReactNode
}

const PricingFormulaCard: FC<Props> = ({
  title,
  price,
  isVatIncluded = true,
  isPerYear,
  children,
  appendChildren,
  className,
}) => (
  <div
    className={mergeClasses(
      'flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8',
      className
    )}
  >
    <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

    <div className="flex justify-center items-baseline my-8">
      <span className="mr-2 text-5xl font-extrabold">
        <span>{price}</span>€
        {!isVatIncluded && <span className="text-sm">HT</span>}
      </span>
      <span className="text-gray-500">
        /<span>{isPerYear ? 'an' : 'mois'}</span>
      </span>
    </div>

    {children}

    {appendChildren}
  </div>
)

export default PricingFormulaCard
