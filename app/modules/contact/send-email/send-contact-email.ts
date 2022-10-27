import { sendMailToCompany } from '@/modules/notification/send-mail/send-mail'

export const sendContactMail = (
  from: string,
  fullname: string,
  subject: string,
  text: string
) =>
  sendMailToCompany({
    context: 'Formulaire de contact',
    from: `"labeilleviennoise.com - ${fullname}" <${from}>`,
    subject,
    text: `Nom: ${fullname}
Email: ${from}
Sujet: ${subject}
---

${text}`,
  })
