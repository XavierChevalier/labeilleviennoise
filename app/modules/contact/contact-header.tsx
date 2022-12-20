import { Alert } from 'flowbite-react'
import type { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLElement> {
  formSuccess: boolean
}

export default function ContactHeader({ children, formSuccess }: Props) {
  return (
    <>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">
        Contactez-nous
      </h2>
      <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 sm:text-lg">
        {children}
      </p>
      {formSuccess && (
        <div className="mb-6">
          <Alert color="success">
            <span>
              <span className="font-medium">Succès</span> Votre message a bien
              été envoyé. Nous reviendrons vers vous au plus vite ! 🐝 Bzz!
            </span>
          </Alert>
        </div>
      )}
    </>
  )
}
