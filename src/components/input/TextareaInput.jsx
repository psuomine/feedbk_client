import React from 'react'
import { Textarea, FormControl, FormLabel } from '@chakra-ui/core'

const TextareaInput = ({ name, label, value, onChange, placeholder }) => {
  return (
    <FormControl>
      <FormLabel mb="1" fontSize="sm" htmlFor={name}>
        {label}
      </FormLabel>
      <Textarea
        resize="none"
        borderRadius="6px"
        borderColor="border.default"
        focusBorderColor="#266EBC"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        boxShadow="sm"
        size="lg"
      />
    </FormControl>
  )
}

export default TextareaInput
