import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/core'

const TextInput = ({ name, label, value, onChange, placeholder }) => {
  return (
    <FormControl>
      <FormLabel mb="1" fontSize="sm" htmlFor={name}>
        {label}
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
      />
    </FormControl>
  )
}

export default TextInput
