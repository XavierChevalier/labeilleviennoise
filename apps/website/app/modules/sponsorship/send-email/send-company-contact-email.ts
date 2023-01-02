import { sendMailToCompany } from '@/modules/notification/send-mail/send-mail.server'

interface SendCompanyContactEmail {
  from: string
  fullname: string
  company: string
  subject: string
  message: string
}

export const sendCompanyContactEmail = ({
  from,
  fullname,
  company,
  subject,
  message,
}: SendCompanyContactEmail) =>
  sendMailToCompany({
    context: 'Formulaire de contact entreprise',
    from: `"labeilleviennoise.com - ${fullname}" <${from}>`,
    subject,
    text: `Nom: ${fullname}
Entreprise: ${company}
Email: ${from}
Sujet: ${subject}
---

${message}`,
  })
