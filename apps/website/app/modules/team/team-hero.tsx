import { IconQuotes } from '@labeilleviennoise/icons'
import { mergeClasses } from '@labeilleviennoise/merge-classes'
import { createTextShadow } from '@labeilleviennoise/ui'
import { useTheme } from 'flowbite-react'
import { IKImage } from 'imagekitio-react'
import type { FC, HTMLProps } from 'react'
import ApiaryStory from '@/modules/apiary/ApiaryStory'

export default function TeamHero() {
  return (
    <div className="flex flex-col gap-6 md:flex-row min-h-[448px] items-center text-sm sm:text-base lg:text-xl text-gray-900">
      <TeamHeroAvatarWithQuote
        position="left"
        imageTitle="Anne-Marie"
        image={
          <IKImage
            className="mx-auto max-h-[26rem] rounded-md"
            path="images/anne-marie.jpg"
            alt="Anne-Marie tenant une grappe d'abeilles"
            lqip={{ active: true, quality: 10 }}
            transformation={[{ height: '400', width: '225' }]}
          />
        }
      >
        "L'impression de tenir le monde au creux de la main 🐝"
        <br />
        Une réelle prise de conscience et une véritable passion qui ne cessent
        de croître. Je suis admirative de l'univers des abeilles et j'ai appris
        à m'en approcher aujourd'hui me voici devenue apicultrice.
      </TeamHeroAvatarWithQuote>

      <TeamHeroAvatarWithQuote
        position="right"
        imageTitle="Ludovic"
        image={
          <IKImage
            className="mx-auto max-h-[26rem] rounded-md"
            path="images/ludovic.jpg"
            alt="Ludovic en tenue d'apiculteur"
            lqip={{ active: true, quality: 10 }}
            transformation={[{ height: '400', width: '225' }]}
          />
        }
      >
        Apiculteur passionné, je souhaite protéger nos butineuses dans le
        respect de leur environnement. Je lutte régulièrement contre leur
        principal prédateur, le frelon asiatique.
      </TeamHeroAvatarWithQuote>
    </div>
  )
}

interface TeamHeroAvatarWithQuoteProps extends HTMLProps<HTMLDivElement> {
  position: 'left' | 'right'
  image: JSX.Element
  imageTitle: string
}

const TeamHeroAvatarWithQuote: FC<TeamHeroAvatarWithQuoteProps> = ({
  position,
  children,
  image,
  imageTitle,
}) => {
  const { mode } = useTheme()
  const textStroke = mode === 'light' ? createTextShadow(1, '#fff') : ''

  return (
    <div className="flex gap-4 items-center justify-center">
      <blockquote
        className={mergeClasses(
          'relative italic w-1/2',
          position === 'left' && 'text-right',
          position === 'right' && 'order-2'
        )}
      >
        <IconQuotes
          variant="primary"
          mirror={position === 'right'}
          className={mergeClasses(
            'opacity-25 absolute w-20 z-[-1]',
            position === 'right' && 'right-0 bottom-0'
          )}
        />
        <p style={{ textShadow: textStroke }}>{children}</p>
      </blockquote>

      <ApiaryStory description={imageTitle}>{image}</ApiaryStory>
    </div>
  )
}
