import type { HTMLProps } from 'react'

export interface Props extends HTMLProps<HTMLElement> {
  pricePerMonth: number
  pricePerYear: number
  isToggled: boolean
}

export default function PeriodLabel({
  pricePerMonth,
  pricePerYear,
  isToggled,
}: Props) {
  return (
    <>
      <span className="mr-2 text-5xl font-bold">
        <span>{!isToggled ? pricePerMonth : pricePerYear}</span>€
      </span>
      <span className="text-gray-500 dark:text-gray-400">
        /<span data-per="month">{!isToggled ? 'mois' : 'an'}</span>
      </span>
    </>
  )
}
