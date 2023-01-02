import { mergeClasses } from '@labeilleviennoise/merge-classes'
import { createTextShadow } from '@labeilleviennoise/ui'
import { useTheme } from 'flowbite-react'
import type { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  stepNumber: string
  title: string
  description: string | JSX.Element
  direction: 'left' | 'right'
}

const HoneyHouseStep: FC<Props> = ({
  stepNumber,
  title,
  description,
  children,
  direction,
}) => {
  const { mode } = useTheme()

  return (
    <section className="grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 md:py-16 md:grid-cols-12">
      <div
        className={mergeClasses(
          'mr-auto place-self-center md:col-span-6 lg:col-span-7 mx-auto text-center md:text-left',
          direction === 'right' ? 'md:order-2' : 'md:order-1 md:w-full'
        )}
      >
        <h3 className="transition-colors relative max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-4xl md:text-5xl xl:text-6xl">
          <span className="-z-10 absolute -top-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 text-9xl opacity-20 text-primary">
            {stepNumber}
          </span>
          <span
            style={{
              textShadow: mode === 'light' ? createTextShadow(3, '#fff') : '',
            }}
          >
            {title}
          </span>
        </h3>
        <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl">
          {description}
        </p>
      </div>

      <div
        className={mergeClasses(
          'mb-6 md:mb-0 md:mt-0 md:col-span-6 lg:col-span-5 md:flex mx-auto',
          direction === 'right'
            ? 'order-1 md:order-1 md:ml-0'
            : 'md:order-2 md:mr-0'
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default HoneyHouseStep
