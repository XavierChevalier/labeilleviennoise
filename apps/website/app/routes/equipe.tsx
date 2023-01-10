import { buildMeta } from '@labeilleviennoise/seo'
import CollaboratorsSection from '@/modules/collaborators/collaborators-section'
import TeamHero from '@/modules/team/team-hero'
import TeamSection from '@/modules/team/team-section'

export const meta = buildMeta({
  title: "L'équipe - L'Abeille Viennoise",
  description:
    "L'équipe de l'Abeille Viennoise est composée de passionnés de la nature et de l'apiculture. Découvrez qui nous sommes !",
})

export default function Equipe() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center">
          <h1 className="max-w-2xl my-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mx-auto text-center text-primary">
            L'Abeille Viennoise
          </h1>
        </div>
        <TeamHero />
      </div>
      <TeamSection />
      <CollaboratorsSection />
    </section>
  )
}
