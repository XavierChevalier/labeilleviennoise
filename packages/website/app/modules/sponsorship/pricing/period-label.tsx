import type { HTMLProps } from 'react'

export interface Props extends HTMLProps<HTMLElement> {
  pricePerMonth: number
  pricePerYear: number
  isPerYear: boolean
}

export default function PeriodLabel({
  pricePerMonth,
  pricePerYear,
  isPerYear,
}: Props) {
  return (
    <>
      <span className="mr-2 text-5xl font-bold">
        {isPerYear ? pricePerYear : pricePerMonth}€
      </span>
      <span className="text-gray-500">
        /<span>{isPerYear ? 'an' : 'mois'}</span>
        <br />
        {!isPerYear && <span>pendant 1 an</span>}
      </span>
    </>
  )
}
