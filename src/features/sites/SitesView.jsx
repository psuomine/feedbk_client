import { useState } from 'react'
import { Text, Box } from '@chakra-ui/core'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Content from 'components/layout/Content'
import Modal from 'components/modal/Modal'

const SitesView = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Content>
        <Box d="flex" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="500">
            Sites
          </Text>
          <PrimaryButton onClick={() => setIsOpen(true)}>
            Add new site
          </PrimaryButton>
        </Box>
      </Content>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default SitesView
