import React, { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <div className="my-3">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium leading-5 text-gray-700 capitalize"
      >
        {props.label || props.name}
      </label>
      <div className="mt-2 rounded-md shadow-sm">
        <input
          {...props}
          ref={ref}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
    </div>
  )
})

export default Input
