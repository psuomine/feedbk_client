import { useState } from 'react'
import { Box } from '@chakra-ui/core'
import PrimaryButton from 'components/buttons/PrimaryButton'

import {
  Modal,
  ModalContents,
  ModalOpenButton,
  ModalBody,
  ModalFooter,
} from 'components/modal/Modal'
import { TextInput, TextareaInput } from 'components/input'

const AddSiteModal = () => {
  const [isError, setIsError] = useState(false)

  const toggleError = () => setIsError(!isError)

  const onSiteNameBlur = () => {
    setIsError(true)
  }

  return (
    <Modal>
      <ModalOpenButton>
        <PrimaryButton>Add new site</PrimaryButton>
      </ModalOpenButton>
      <ModalContents
        title="New site"
        subtitle="Fill out the site information below to get started"
      >
        <ModalBody>
          <TextInput
            name="siteName"
            label="Site name"
            value=""
            required
            error={isError ? 'Site name is required' : ''}
            onBlur={onSiteNameBlur}
          />
          <Box mt={4}>
            <TextareaInput
              name="siteDescription"
              label="Description"
              value=""
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <PrimaryButton onClick={toggleError}>Add this site</PrimaryButton>
        </ModalFooter>
      </ModalContents>
    </Modal>
  )
}

export default AddSiteModal
