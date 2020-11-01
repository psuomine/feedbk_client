import React from 'react'
import { Container } from '@chakra-ui/core'

const Content = ({ children }) => {
  return (
    <Container
      maxW="lg"
      borderWidth="1px"
      mx="auto"
      w="100%"
      p="6"
      bg="white"
      boxShadow="sm"
    >
      {children}
    </Container>
  )
}

export default Content
