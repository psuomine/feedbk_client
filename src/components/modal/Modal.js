import React from 'react'
import { PrimaryButton, SecondaryButton } from 'components/buttons'

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
} from '@chakra-ui/core'
import TextInput from 'components/input/TextInput'
import TextareaInput from 'components/input/TextareaInput'

const Modal = ({ isOpen, onClose }) => {
  console.log('ChakraModal', ChakraModal)
  return (
    <ChakraModal
      initialFocusRef={null}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent maxW="xl">
        <ModalHeader px={6} pb={1} fontSize="lg">
          New site
        </ModalHeader>
        <Box px={6}>
          <Text fontSize="sm" lineHeight="short" color="text.gray.600">
            Fill out the information below to get started
          </Text>
        </Box>
        <ModalCloseButton top={6} right={6} />
        <ModalBody px={6} mt={4}>
          <TextInput name="siteName" label="Site name" value="" />
          <Box mt={4}>
            <TextareaInput
              name="siteDescription"
              label="Description"
              value=""
            />
          </Box>
        </ModalBody>

        <ModalFooter backgroundColor="bg.gray.100" p={6}>
          <SecondaryButton _first={{ mr: 6 }} onClick={onClose}>
            Cancel
          </SecondaryButton>
          <PrimaryButton>Add this site</PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
