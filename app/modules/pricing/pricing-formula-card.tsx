import AppLink from '../shared/link/app-link'
import { useURL } from '@/modules/shared/location/use-url'

export interface Props extends React.HTMLProps<HTMLElement> {
  title: string
  pricePerMonth: number
  pricePerYear: number
  isToggled: boolean
}

export default function PricingFormulaCard(props: Props) {
  const { title, pricePerMonth, pricePerYear, isToggled } = props
  const { createUrl } = useURL()
  const to = createUrl('/contact-parrainage')
  to.searchParams.set('per', !isToggled ? 'mensuel' : 'annuel')
  to.searchParams.set('title', title)

  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">
          <span>{!isToggled ? pricePerMonth : pricePerYear}</span>€
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          /<span data-per="month">{!isToggled ? 'mois' : 'an'}</span>
        </span>
      </div>

      {props.children}

      <AppLink
        to={to}
        className="inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center rounded-lg focus:ring-4 mt-auto no-underline text-white bg-primary hover:bg-primary-500 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Prendre contact
      </AppLink>
    </div>
  )
}
