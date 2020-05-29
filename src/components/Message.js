import React from 'react'

const Message = ({ isFormValid }) => {
  return (
    <h3
      className={`text-center text-lg font-medium ${
        isFormValid ? 'text-green-500' : 'text-red-500'
      }`}
    >
      {isFormValid ? 'Form is Complete!' : 'Form is Incomplete!'}
    </h3>
  )
}

export default Message
