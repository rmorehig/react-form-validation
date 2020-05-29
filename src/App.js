import React, { useState } from 'react'
import Form from './components/Form'
import Message from './components/Message'

const App = () => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [validated, setValidated] = useState(false)
  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col justify-center">
      <Message isFormValid={isFormValid} validated={validated} />
      <main className="mx-auto w-full max-w-sm">
        <Form setIsFormValid={setIsFormValid} setValidated={setValidated} />
      </main>
    </div>
  )
}

export default App
