import React, { useState } from 'react'
import Form from './components/Form'
import Message from './components/Message'

const App = () => {
  const [isFormValid, setIsFormValid] = useState(false)

  return (
    <div className="max-w-screen-md mx-auto">
      <Form isFormValid={isFormValid} setIsFormValid={setIsFormValid} />
      <Message isFormValid={isFormValid} />
    </div>
  )
}

export default App
