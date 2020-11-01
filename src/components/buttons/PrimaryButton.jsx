import React from 'react'
import { Button } from '@chakra-ui/core'

const PrimaryButton = ({ children }) => {
    return (
        <Button fontWeight="normal" size="sm" colorScheme="brand" px="4">
            {children}
        </Button>
    )
}

export default PrimaryButton
