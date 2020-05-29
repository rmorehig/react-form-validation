import React from 'react'

const Message = ({ isFormValid, validated }) => {
  if (!validated)
    return (
      <h1 className="text-center text-xl font-semibold">Form Validation</h1>
    )
  return (
    <h1
      className={`text-center text-lg font-medium ${
        isFormValid ? 'text-green-500' : 'text-red-500'
      }`}
    >
      {isFormValid ? 'Form is Complete!' : 'Form is Incomplete!'}
    </h1>
  )
}

export default Message
