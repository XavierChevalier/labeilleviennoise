import React from 'react'

export interface Props extends React.HTMLProps<HTMLLabelElement> {
  before: React.ReactNode
}

export default function AppSwitch(props: Props) {
  return (
    <label
      {...props}
      htmlFor="default-toggle"
      className="inline-flex relative items-center mb-4 cursor-pointer"
    >
      <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {props.before}
      </span>
      <input
        type="checkbox"
        value=""
        id="default-toggle"
        className="sr-only peer"
      />
      <span className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></span>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {props.children}
      </span>
    </label>
  )
}
