import * as React from 'react'
import { SecondaryButton } from 'components/buttons'

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter as ChakraModalFooter,
  ModalBody as ChakraModalBody,
  ModalCloseButton,
  Text,
  Box,
} from '@chakra-ui/core'

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args))

const ModalContext = React.createContext()

const Modal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

const ModalDismissButton = ({ children }) => {
  const [, setIsOpen] = React.useContext(ModalContext)

  return React.cloneElement(children, {
    onClick: callAll(() => setIsOpen(false), children.props.onClick),
  })
}

const ModalOpenButton = ({ children }) => {
  const [, setIsOpen] = React.useContext(ModalContext)

  return React.cloneElement(children, {
    onClick: callAll(() => setIsOpen(true), children.props.onClick),
  })
}

const ModalContentsBase = (props) => {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)

  return (
    <ChakraModal
      initialFocusRef={null}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      motionPreset="slideInBottom"
      {...props}
    />
  )
}

const ModalBody = ({ children }) => {
  return (
    <ChakraModalBody px={6} my={4}>
      {children}
    </ChakraModalBody>
  )
}

const ModalFooter = ({ children }) => {
  return (
    <ChakraModalFooter backgroundColor="bg.gray.100" p={6}>
      <ModalDismissButton>
        <SecondaryButton _first={{ mr: 6 }}>Cancel</SecondaryButton>
      </ModalDismissButton>
      {children}
    </ChakraModalFooter>
  )
}

const ModalContents = ({ title, subtitle, children, ...props }) => {
  return (
    <ModalContentsBase {...props}>
      <ModalOverlay />
      <ModalContent maxW="xl">
        <ModalHeader px={6} pb={1} fontSize="lg">
          {title}
        </ModalHeader>
        <Box px={6}>
          <Text fontSize="sm" lineHeight="short" color="text.gray.600">
            {subtitle}
          </Text>
        </Box>
        <ModalDismissButton>
          <ModalCloseButton top={6} right={6} />
        </ModalDismissButton>
        {children}
      </ModalContent>
    </ModalContentsBase>
  )
}

export {
  Modal,
  ModalDismissButton,
  ModalOpenButton,
  ModalContents,
  ModalBody,
  ModalFooter,
}
