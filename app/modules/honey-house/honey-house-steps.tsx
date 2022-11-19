import { IKVideo } from 'imagekitio-react'
import type { FC } from 'react'
import HoneyHouseStep from '@/modules/honey-house/honey-house-step'

const HoneyHouseSteps: FC = () => (
  <>
    <HoneyHouseStep
      stepNumber="01"
      title="Récolte du miel"
      description={
        <>
          Ici nos ouvrières sont à l'ouvrage, présence de couvain, c'est le
          signe d'une bonne population dans la ruche qui se porte bien.
          <br />
          Bientôt nous pourrons mettre des hausses pour notre récolte de miel.
          <br />
          Voici enfin venue la récompense d'une année de labeur.
        </>
      }
      direction="left"
    >
      <IKVideo
        path="images/miellerie/1.1-cadres.mp4"
        loop={true}
        muted={true}
        autoPlay={true}
        className="rounded-md"
        transformation={[{ width: '400', height: '400' }]}
      />
    </HoneyHouseStep>

    <HoneyHouseStep
      stepNumber="02"
      title="Ouverture des opercules"
      description="Une fois bien plein et operculé, le cadre peut être retiré et nous pouvons en extraire le miel."
      direction="right"
    >
      <IKVideo
        path="images/miellerie/2-ouverture-opercules.MOV"
        loop={true}
        muted={true}
        autoPlay={true}
        className="rounded-md"
        transformation={[{ width: '400', height: '400' }]}
      />
    </HoneyHouseStep>

    <HoneyHouseStep
      stepNumber="03"
      title="Extraction du miel"
      description="Nous utilisons un extracteur manuel pour centrifuger le miel que nous avons récolté."
      direction="left"
    >
      <IKVideo
        path="images/miellerie/4-extraction.mov"
        loop={true}
        muted={true}
        autoPlay={true}
        className="rounded-md"
        transformation={[{ width: '400', height: '400' }]}
      />
    </HoneyHouseStep>

    <HoneyHouseStep
      stepNumber="04"
      title="Filtrage du miel"
      description="Il est important de filtrer le miel avant de le laisser reposer dans un maturateur pendant plusieurs jours. Puis nous le filtrerons une seconde fois avant la mise en pots"
      direction="right"
    >
      <IKVideo
        path="images/miellerie/4-filtrage.MOV"
        loop={true}
        muted={true}
        autoPlay={true}
        className="rounded-md"
        transformation={[{ width: '400', height: '400' }]}
      />
    </HoneyHouseStep>

    <HoneyHouseStep
      stepNumber="05"
      title="Mise en pots"
      description="Le moment est enfin arrivé où de la récolte nous passons à la mise en pots et à l'étiquetage."
      direction="left"
    >
      <IKVideo
        path="images/miellerie/5-mise-en-pots.mp4"
        loop={true}
        muted={true}
        autoPlay={true}
        className="rounded-md"
        transformation={[{ width: '400', height: '400' }]}
      />
    </HoneyHouseStep>
  </>
)

export default HoneyHouseSteps
