import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const initialValues = { name: '', email: '', phone: '', url: '' }
const Form = ({ setIsFormValid }) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const validate = () => {
    setIsFormValid(true)
  }
  const reset = () => {
    setValues(initialValues)
    setIsFormValid(false)
  }
  const handleSubmit = event => {
    event.preventDefault()
    validate()
  }

  return (
    <div className="py-8">
      <h1 className="text-center text-xl font-semibold">Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <Input
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <Input
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        <Input
          name="url"
          value={values.url}
          onChange={handleChange}
          placeholder="Enter your blog URL"
        />
        <div className="flex justify-around">
          <Button onClick={reset}>Reset</Button>
          <Button type="submit">Verify</Button>
        </div>
      </form>
    </div>
  )
}

export default Form
