import TeamAvatar from '@/modules/team/team-avatar'

export default function TeamSection() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Notre équipe
        </h2>
        <p className="font-light text-gray-500 sm:text-xl">
          L'Abeille Viennoise c'est nous, mais c'est aussi eux...
        </p>
      </div>
      <div className="grid gap-8 lg:gap-16 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        <TeamAvatar
          name="Xavier"
          role="Développeur"
          imagePath="images/team/xavier.jpeg"
        />
        <TeamAvatar
          name="Nicolas"
          role="Développeur"
          imagePath="images/team/nicolas.jpg"
        />
        <TeamAvatar
          name="Steffie"
          role="Artisanat"
          imagePath="images/team/steffie.jpg"
        />
        <TeamAvatar
          name="Perrine"
          role="Marketing"
          imagePath="images/team/perrine.png"
        />
        <TeamAvatar
          name="Morgane"
          role="Design"
          imagePath="images/team/morgane.webp"
        />
      </div>
    </div>
  )
}
