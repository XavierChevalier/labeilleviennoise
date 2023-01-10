import { mergeClasses } from '@labeilleviennoise/merge-classes'
import { IKImage } from 'imagekitio-react'
import type { FC, PropsWithChildren } from 'react'

export default function HoneyHouseHero() {
  return (
    <div className="my-8 overflow-hidden h-[100vh] md:max-h-[900px] max-h-[300px] xl:rounded-md">
      <div className="flex flex-wrap -mt-20">
        <SlideColumn
          animation="animate-infiniteDownSlow"
          className="-ml-[33.3%]"
        >
          <SlideImage
            path="images/miellerie/6.2-pot.jpg"
            transformation={[
              {
                width: '400',
                height: '500',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/wrap-cadeau.jpg"
            transformation={[
              {
                width: '400',
                height: '300',
              },
            ]}
          />
          <SlideImage
            path="images/miellerie/6.4-pot.jpg"
            transformation={[
              {
                width: '400',
                height: '300',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/gnome2.jpg"
            transformation={[
              {
                width: '400',
                height: '700',
              },
            ]}
          />
        </SlideColumn>

        <SlideColumn animation="animate-infiniteUp">
          <SlideImage
            path="images/creations-artisanales/gnome1.jpg"
            transformation={[
              {
                width: '400',
                height: '700',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/ensemble-doudoux.jpg"
            transformation={[
              {
                width: '400',
                height: '300',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/bougies.jpg"
            transformation={[
              {
                width: '400',
                height: '350',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/stand.jpg"
            transformation={[
              {
                width: '400',
                height: '450',
              },
            ]}
          />
        </SlideColumn>

        <SlideColumn animation="animate-infiniteDown">
          <SlideImage
            path="images/creations-artisanales/une-bougie.jpg"
            transformation={[
              {
                width: '400',
                height: '800',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/peluche-avec-alveoles.jpg"
            transformation={[
              {
                width: '400',
                height: '500',
              },
            ]}
          />
          <SlideImage
            path="images/miellerie/6.3-pot.jpg"
            transformation={[
              {
                width: '400',
                height: '500',
              },
            ]}
          />
        </SlideColumn>

        <SlideColumn animation="animate-infiniteUpSlow">
          <SlideImage
            path="images/miellerie/6.2-pot.jpg"
            transformation={[
              {
                width: '400',
                height: '500',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/wrap-cadeau.jpg"
            transformation={[
              {
                width: '400',
                height: '300',
              },
            ]}
          />
          <SlideImage
            path="images/miellerie/6.4-pot.jpg"
            transformation={[
              {
                width: '400',
                height: '300',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/gnome2.jpg"
            transformation={[
              {
                width: '400',
                height: '700',
              },
            ]}
          />
        </SlideColumn>

        <SlideColumn animation="animate-infiniteDownSlow">
          <SlideImage
            path="images/creations-artisanales/gnome1.jpg"
            transformation={[
              {
                width: '400',
                height: '700',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/ensemble-doudoux.jpg"
            transformation={[
              {
                width: '400',
                height: '300',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/bougies.jpg"
            transformation={[
              {
                width: '400',
                height: '350',
              },
            ]}
          />
          <SlideImage
            path="images/creations-artisanales/stand.jpg"
            transformation={[
              {
                width: '400',
                height: '450',
              },
            ]}
          />
        </SlideColumn>
      </div>
    </div>
  )
}

interface SlideImageProps {
  path: string
  transformation: { width: string; height: string }[]
}

const SlideImage: FC<SlideImageProps> = ({ path, ...props }) => (
  <IKImage
    {...props}
    path={path}
    lqip={{ active: true, quality: 10 }}
    className="rounded-md mt-4 w-full"
  />
)

interface SlideColumnProps extends PropsWithChildren {
  animation: string
  className?: string
}

const SlideColumn: FC<SlideColumnProps> = ({
  animation,
  children,
  className,
}) => (
  <div
    className={mergeClasses('w-[33.3%] px-2 md:px-4 rotate-12', className)}
    style={{ flex: '25%' }}
  >
    <div className={mergeClasses(animation, 'motion-reduce:animation-none')}>
      {children}
      {children}
    </div>
  </div>
)
