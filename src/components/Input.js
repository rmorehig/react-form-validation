import React, { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={props.name}
        className="block font-medium text-gray-700 capitalize"
      >
        {props.label || props.name}
      </label>
      <div className="mt-2 rounded-md shadow-sm">
        <input
          {...props}
          ref={ref}
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        />
      </div>
    </div>
  )
})

export default Input
