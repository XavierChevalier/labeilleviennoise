import { sendMailToCompany } from '@/modules/notification/send-mail/send-mail.server'

interface SendContactEmail {
  from: string
  fullname: string
  subject: string
  message: string
}

export const sendContactMail = ({
  from,
  fullname,
  subject,
  message,
}: SendContactEmail) =>
  sendMailToCompany({
    context: 'Formulaire de contact',
    from: `"labeilleviennoise.com - ${fullname}" <${from}>`,
    subject,
    text: `Nom: ${fullname}
Email: ${from}
Sujet: ${subject}
---

${message}`,
  })
