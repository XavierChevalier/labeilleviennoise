import type { FormProps, FormSchema } from 'remix-forms'
import { Form as RemixForm } from 'remix-forms'
import Error from './errors/error'
import Errors from './errors/errors'
import AppInput from './input/app-input'
import AppLabel from './label/app-label'
import AppSubmitButton from './submit/app-submit-button'
import AppTextarea from './textarea/app-textarea'

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
