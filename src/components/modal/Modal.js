import React from 'react'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
} from '@chakra-ui/core'
import { Fade } from '@chakra-ui/transition'

const Modal = ({ isOpen, onClose }) => {
  console.log('ChakraModal', ChakraModal)
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent maxW="xl" p={6}>
        <ModalHeader p={0} fontSize="lg">
          New site
        </ModalHeader>
        <Text lineHeight="short" color="text.gray.600">
          Fill out the information below to get started
        </Text>
        <ModalCloseButton top={6} right={6} />
        <ModalBody p={0} mt={4}>
          YOLO
        </ModalBody>

        <ModalFooter backgroundColor="bg.gray.100" p={0}>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
