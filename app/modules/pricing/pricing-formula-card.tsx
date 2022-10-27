import { useLoaderData } from '@remix-run/react'
import AppButton from '../shared/button/app-button'

export interface Props extends React.HTMLProps<HTMLElement> {
  title: string
  pricePerMonth: number
  pricePerYear: number
  isToggled: boolean
}

export default function PricingFormulaCard(props: Props) {
  const { title, pricePerMonth, pricePerYear, isToggled } = props
  const data = useLoaderData()
  const mailto = (per: string) =>
    'mailto:' +
    data.envContactMail +
    '?subject=Prise de contact pour parrainage' +
    '&body=Bonjour, je souhaite devenir parrain ' +
    per +
    ' grâce à la formule ' +
    title +
    '.'

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

      <AppButton
        type="primary"
        href={mailto(!isToggled ? 'mensuel' : 'annuel')}
        className="mt-auto"
      >
        Prendre contact
      </AppButton>
    </div>
  )
}
