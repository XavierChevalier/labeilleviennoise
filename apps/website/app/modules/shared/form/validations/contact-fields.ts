import { z } from 'zod'

export const from = z
  .string()
  .min(1, { message: 'Votre email ne doit pas être vide' })
  .email({ message: "Votre email n'est pas valide" })

export const fullname = z
  .string()
  .min(1, { message: 'Vos nom et prénom ne doivent pas être vide' })

export const company = z
  .string()
  .min(1, { message: 'Pour quelle entreprise travaillez-vous ?' })

export const subject = z
  .string()
  .min(1, { message: 'Dites-nous sur quel sujet nous pouvons vous aider' })

export const message = z.string().min(1, {
  message:
    'Quelques informations sur votre questionnement nous seraient utiles',
})
