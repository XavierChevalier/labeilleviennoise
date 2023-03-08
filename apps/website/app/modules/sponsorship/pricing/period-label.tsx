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
      <span className="mr-2 text-5xl">
        <span className="font-bold">
          {isPerYear ? pricePerYear : pricePerMonth}€
        </span>
        {isPerYear && (
          <u className="pl-3 line-through text-sm text-gray-500">
            {pricePerMonth}€
          </u>
        )}
      </span>
      <span className="text-gray-500">
        /mois
        <br />
        {isPerYear && <span>pendant 1 an</span>}
      </span>
    </>
  )
}
