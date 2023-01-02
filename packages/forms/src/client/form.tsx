import {
  Form as FrameworkForm,
  useActionData,
  useSubmit,
  useTransition as useNavigation,
} from '@remix-run/react'
import { createForm } from 'remix-forms'
import type { FormProps, FormSchema } from 'remix-forms'
import Error from '@/client/errors/error'
import Errors from '@/client/errors/errors'
import AppInput from '@/client/input/app-input'
import AppLabel from '@/client/label/app-label'
import AppSubmitButton from '@/client/submit/app-submit-button'
import AppTextarea from '@/client/textarea/app-textarea'

const RemixForm = createForm({
  component: FrameworkForm,
  useNavigation,
  useSubmit,
  useActionData,
})

export default function Form<Schema extends FormSchema>(
  props: FormProps<Schema>
) {
  return (
    <RemixForm<Schema>
      netlify-honeypot="bot-field"
      data-netlify="true"
      className="flex flex-col space-y-6"
      labelComponent={AppLabel}
      inputComponent={AppInput}
      multilineComponent={AppTextarea}
      buttonComponent={AppSubmitButton}
      globalErrorsComponent={Errors}
      errorComponent={Error}
      {...props}
    />
  )
}
