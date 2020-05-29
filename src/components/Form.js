import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const initialValues = { name: '', email: '', phone: '', url: '' }

const checkPhone = value => {
  return value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)
}
const checkEmail = value =>
  value.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  )

const checkUrl = value =>
  value.match(
    /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
  )

const checkMinLength = (value, length) => {
  return value.length >= length
}
const checkMaxLength = (value, length) => {
  return value.length <= length
}

const validationSchema = {
  name: value => checkMinLength(value, 3) && checkMaxLength(value, 30),
  email: checkEmail,
  phone: checkPhone,
  url: checkUrl,
}
const Form = ({ setIsFormValid, setValidated }) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = event => {
    setValidated(false)
    setIsFormValid(false)
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const checkFields = values => {
    return Object.keys(values).every(field =>
      validationSchema[field](values[field])
    )
  }
  const validate = () => {
    const isValid = checkFields(values)
    if (isValid) {
      setIsFormValid(true)
    }
    setValidated(true)
  }
  const reset = () => {
    setValues(initialValues)
    setIsFormValid(false)
    setValidated(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    validate()
  }

  return (
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
      <div className="flex justify-around py-3">
        <Button onClick={reset}>Reset</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

export default Form
