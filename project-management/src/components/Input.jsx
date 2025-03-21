import { forwardRef } from 'react'

const Input = forwardRef(function Input({ isTextArea, label, ...props }, ref) {
  const classes =
    'w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
  const inputData = []

  return (
    <p className="flex flex-col gap-1 mt-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  )
})

export default Input
