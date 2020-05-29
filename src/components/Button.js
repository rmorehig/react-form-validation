import React, { forwardRef } from 'react'

const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        ref={ref}
        {...props}
        className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
      >
        {children}
      </button>
    </span>
  )
})

export default Button
