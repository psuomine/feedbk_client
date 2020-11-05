import React from 'react'
import { Box, Link } from '@chakra-ui/core'
import { NavLink, useLocation } from 'react-router-dom'

const AppBarLink = ({ to, children }) => {
  const { pathname } = useLocation()

  const isActive = pathname === to

  return (
    <Box
      transition="all 0.2s ease-in-out"
      cursor="pointer"
      px="3"
      py="2"
      borderRadius="md"
      bg={isActive ? 'bg.gray.900' : 'bg.gray.800'}
      ml="4"
      d="flex"
      justifyContent="center"
      _hover={{
        backgroundColor: 'bg.gray.700',
      }}
    >
      <Link
        color={isActive ? 'white' : 'text.gray.300'}
        as={NavLink}
        to={to}
        fontSize="sm"
        fontWeight="medium"
        letterSpacing="wide"
        _hover={{ color: 'white' }}
        _focus={{ boxShadow: 'none' }}
      >
        {children}
      </Link>
    </Box>
  )
}

export default AppBarLink
