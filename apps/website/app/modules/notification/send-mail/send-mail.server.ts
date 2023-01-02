import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

const createTransportFactory = async () => {
  if (process.env.MAIL_TEST) {
    const testAccount = await nodemailer.createTestAccount()

    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USER,
      clientId: process.env.MAIL_CLIENT_ID,
      clientSecret: process.env.MAIL_CLIENT_SECRET,
      refreshToken: process.env.MAIL_REFRESH_TOKEN,
    },
  })
}

const sendMail = async (options: Mail.Options) => {
  const transporter = await createTransportFactory()
  const info = await transporter.sendMail(options)
  console.log('Message sent: %s', info.messageId)
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}

interface SendMailToCompanyOptions extends Omit<Mail.Options, 'to'> {
  context: string
}

export const sendMailToCompany = ({
  context,
  subject,
  text,
  ...options
}: SendMailToCompanyOptions) => {
  if (!process.env.MAIL_USER) {
    console.error('Environment variable MAIL_USER is not defined.')

    throw new Error(
      `Un problème est survenu lors de l'envoi du mail.
      Votre email n'a pas pu être envoyé. Notre équipe travaille à sa résolution.
      Nous vous prions de nous excuser pour la gêne occasionnée.`
    )
  }

  return sendMail({
    ...options,
    to: process.env.MAIL_USER,
    subject: `[${context}] ${subject}`,
    text: `Origine: ${context}
${text}`,
  })
}
