import { mergeClasses } from '@/modules/shared/html/merge-classes'
import IconCheck from '@/modules/shared/icons/icon-check'
import ButtonChosePlan from '@/modules/sponsorship/pricing/button-chose-plan'
import PeriodLabel from '@/modules/sponsorship/pricing/period-label'
import type { Formulas } from '@/modules/sponsorship/pricing/pricing-comparison'

export interface Props extends React.HTMLProps<HTMLElement> {
  isToggled: boolean
  formulas: Formulas
}

export default function PricingComparisonTable({
  isToggled,
  formulas,
  className,
}: Props) {
  const { nectar, propolis, geleeRoyale } = formulas
  const stickyColumnClasses = 'text-left sticky -left-0.5 bg-white z-10'
  return (
    <table className={mergeClasses('table-fixed mx-auto', className)}>
      <thead className="border-b-[1px]">
        <tr className="text-left text-2xl">
          <th className={mergeClasses(stickyColumnClasses, 'pb-3 font-medium')}>
            Formule
          </th>
          <th className="pb-3 min-w-[226px] font-medium">{nectar.title}</th>
          <th className="pb-3 min-w-[226px] font-medium">{propolis.title}</th>
          <th className="pb-3 min-w-[226px] font-medium">
            {geleeRoyale.title}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b-[1px]">
          <th
            className={mergeClasses(
              stickyColumnClasses,
              'px-2 py-3 font-medium'
            )}
          >
            Prix
          </th>
          <td className="px-2 py-3">
            <PeriodLabel
              pricePerMonth={nectar.pricePerMonth}
              pricePerYear={nectar.pricePerYear}
              isToggled={isToggled}
            />
            <ButtonChosePlan title={nectar.title} isToggled={isToggled} />
          </td>
          <td className="px-2 py-3">
            <PeriodLabel
              pricePerMonth={propolis.pricePerMonth}
              pricePerYear={propolis.pricePerYear}
              isToggled={isToggled}
            />
            <ButtonChosePlan title={propolis.title} isToggled={isToggled} />
          </td>
          <td className="px-2 py-3">
            <PeriodLabel
              pricePerMonth={geleeRoyale.pricePerMonth}
              pricePerYear={geleeRoyale.pricePerYear}
              isToggled={isToggled}
            />
            <ButtonChosePlan title={geleeRoyale.title} isToggled={isToggled} />
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <th
            className={mergeClasses(
              stickyColumnClasses,
              'px-2 py-3 font-medium'
            )}
          >
            Abeilles préservées
          </th>
          <td className="px-2 py-3">5.000</td>
          <td className="px-2 py-3">20.000</td>
          <td className="px-2 py-3">
            40.000
            <small className="block text-sm text-gray-500">
              soit une ruche entière
            </small>
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <th
            className={mergeClasses(
              stickyColumnClasses,
              'px-2 py-3 font-medium'
            )}
          >
            Fleurs/Arbres planté(e)s
          </th>
          <td className="px-2 py-3">
            5.000 fleurs plantées
            <small className="block text-sm text-gray-500">
              1 fleur = 1 abeille heureuse
            </small>
          </td>
          <td className="px-2 py-3">
            <span className="font-semibold">Formule Nectar +</span>
            <br />1 arbre mellifère planté
            <small className="block text-sm text-gray-500">par an</small>
          </td>
          <td className="px-2 py-3">
            <span className="font-semibold">Formule Nectar +</span>
            <br />4 arbres mellifères plantés
            <small className="block text-sm text-gray-500">par an</small>
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <th
            className={mergeClasses(
              stickyColumnClasses,
              'px-2 py-3 font-medium'
            )}
          >
            Pot de miel
          </th>
          <td className="px-2 py-3">
            1 pot de miel de 500g
            <small className="block text-sm text-gray-500">
              par an, étiquette personnalisée
            </small>
          </td>
          <td className="px-2 py-3">
            <span className="font-semibold">Formule Nectar +</span>
            <br />4 pots de miel de 250g
            <small className="block text-sm text-gray-500">
              1 par trimestre
            </small>
          </td>
          <td className="px-2 py-3">
            <span className="font-semibold">Formule Nectar & Propolis +</span>
            <br />4 pots de miel de 250g
            <small className="block text-sm text-gray-500">par an</small>
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <th
            className={mergeClasses(
              stickyColumnClasses,
              'px-2 py-3 font-medium'
            )}
          >
            Mascotte L'Abeille Viennoise™
          </th>
          <td className="px-2 py-3">
            1
            <small className="block text-sm text-gray-500">
              valeur approximative 20€
            </small>
          </td>
          <td className="px-2 py-3">
            1
            <small className="block text-sm text-gray-500">
              valeur approximative 40€
            </small>
          </td>
          <td className="px-2 py-3">
            2
            <small className="block text-sm text-gray-500">
              celles des formules précédentes
            </small>
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <th
            className={mergeClasses(
              stickyColumnClasses,
              'px-2 py-3 font-medium'
            )}
          >
            Des nouvelles des abeilles accompagnées de photos pour suivre
            l'évolution des ruches
            <small className="block text-sm text-gray-500">par trimestre</small>
          </th>
          <td className="px-2 py-3">
            <IconCheck />
          </td>
          <td className="px-2 py-3">
            <IconCheck />
          </td>
          <td className="px-2 py-3">
            <IconCheck />
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <th
            className={mergeClasses(
              stickyColumnClasses,
              'px-2 py-3 font-medium'
            )}
          >
            Coffret gourmand surprise
            <small className="block text-sm text-gray-500">par an</small>
          </th>
          <td className="px-2 py-3 text-red-500 font-black">─</td>
          <td className="px-2 py-3">
            <IconCheck />
          </td>
          <td className="px-2 py-3">
            <IconCheck />
          </td>
        </tr>
        <tr className="even:bg-gray-100/25">
          <th
            className={mergeClasses(
              stickyColumnClasses,
              'px-2 py-3 font-medium'
            )}
          >
            Plaque nominative sur votre ruche
          </th>
          <td className="px-2 py-3 text-red-500 font-black">─</td>
          <td className="px-2 py-3 text-red-500 font-black">─</td>
          <td className="px-2 py-3">
            <IconCheck />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
