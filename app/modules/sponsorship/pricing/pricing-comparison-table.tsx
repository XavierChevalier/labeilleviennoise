import IconCheck from '@/modules/shared/icons/icon-check'
import ButtonChosePlan from '@/modules/sponsorship/pricing/button-chose-plan'
import PeriodLabel from '@/modules/sponsorship/pricing/period-label'
import type { Formulas } from '@/modules/sponsorship/pricing/pricing-comparison'

export interface Props {
  isToggled: boolean
  formulas: Formulas
}

export default function PricingComparisonTable({ isToggled, formulas }: Props) {
  const { nectar, propolis, geleeRoyale } = formulas
  return (
    <table className="hidden lg:table table-fixed mx-auto">
      <thead className="border-b-[1px]">
        <tr className="text-left text-2xl">
          <th className="pb-3 font-medium">Formule</th>
          <th className="pb-3 w-[299px] font-medium">Nectar</th>
          <th className="pb-3 w-[299px] font-medium">Propolis</th>
          <th className="pb-3 w-[299px] font-medium">Gelée Royale</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b-[1px]">
          <td className="py-3 font-medium">Prix</td>
          <td className="py-3">
            <PeriodLabel
              pricePerMonth={nectar.pricePerMonth}
              pricePerYear={nectar.pricePerYear}
              isToggled={isToggled}
            />
            <ButtonChosePlan title={nectar.title} isToggled={isToggled} />
          </td>
          <td className="py-3">
            <PeriodLabel
              pricePerMonth={propolis.pricePerMonth}
              pricePerYear={propolis.pricePerYear}
              isToggled={isToggled}
            />
            <ButtonChosePlan title={propolis.title} isToggled={isToggled} />
          </td>
          <td className="py-3">
            <PeriodLabel
              pricePerMonth={geleeRoyale.pricePerMonth}
              pricePerYear={geleeRoyale.pricePerYear}
              isToggled={isToggled}
            />
            <ButtonChosePlan title={geleeRoyale.title} isToggled={isToggled} />
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <td className="py-3 font-medium">Abeilles préservées</td>
          <td className="py-3">5.000</td>
          <td className="py-3">20.000</td>
          <td className="py-3">
            40.000
            <small className="block text-sm text-gray-500">
              soit une ruche entière
            </small>
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <td className="py-3 font-medium">Fleurs/Arbres planté(e)s</td>
          <td className="py-3">
            5.000 fleurs plantées
            <small className="block text-sm text-gray-500">
              1 fleur = 1 abeille heureuse
            </small>
          </td>
          <td className="py-3">
            <span className="font-semibold">Formule Nectar +</span>
            <br />1 arbre planté
            <small className="block text-sm text-gray-500">par an</small>
          </td>
          <td className="py-3">
            <span className="font-semibold">Formule Nectar +</span>
            <br />4 arbres plantés
            <small className="block text-sm text-gray-500">par an</small>
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <td className="py-3 font-medium">Pot de miel</td>
          <td className="py-3">
            1 pot de miel de 500g
            <small className="block text-sm text-gray-500">
              par an, étiquette personnalisée
            </small>
          </td>
          <td className="py-3">
            <span className="font-semibold">Formule Nectar +</span>
            <br />4 pots de miel de 250g
            <small className="block text-sm text-gray-500">
              1 par trimestre
            </small>
          </td>
          <td className="py-3">
            <span className="font-semibold">Formule Nectar & Propolis +</span>
            <br />4 pots de miel de 250g
            <small className="block text-sm text-gray-500">par an</small>
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <td className="py-3 font-medium">Mascotte L'Abeille Viennoise™</td>
          <td className="py-3">
            1
            <small className="block text-sm text-gray-500">
              valeur approximative 20€
            </small>
          </td>
          <td className="py-3">
            1
            <small className="block text-sm text-gray-500">
              valeur approximative 40€
            </small>
          </td>
          <td className="py-3">
            2
            <small className="block text-sm text-gray-500">
              celles des formules précédentes
            </small>
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <td className="py-3 font-medium">
            Des nouvelles des abeilles accompagnée de photos pour suivre
            l'évolution des ruches
            <small className="block text-sm text-gray-500">par trimestre</small>
          </td>
          <td className="py-3">
            <IconCheck />
          </td>
          <td className="py-3">
            <IconCheck />
          </td>
          <td className="py-3">
            <IconCheck />
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <td className="py-3 font-medium">
            Coffret gourmand surprise
            <small className="block text-sm text-gray-500">par an</small>
          </td>
          <td className="text-red-500 font-black">─</td>
          <td className="py-3">
            <IconCheck />
          </td>
          <td className="py-3">
            <IconCheck />
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <td className="py-3 font-medium">
            Plaque nominative sur votre ruche
          </td>
          <td className="text-red-500 font-black">─</td>
          <td className="text-red-500 font-black">─</td>
          <td className="py-3">
            <IconCheck />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
