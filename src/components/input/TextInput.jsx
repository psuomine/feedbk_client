import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/core'

const TextInput = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <FormControl>
      <FormLabel mb="1" fontSize="sm" htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </FormLabel>
      <Input
        borderColor="border.default"
        focusBorderColor="#266EBC"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        boxShadow="sm"
        required
      />
    </FormControl>
  )
}

export default TextInput
