import * as React from 'react'
import {
  render,
  screen,
  within,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Modal,
  ModalContents,
  ModalOpenButton,
  ModalBody,
  ModalFooter,
} from 'components/modal/Modal'

test('can be opened and closed', async () => {
  const title = 'Title'
  const subtitle = 'Subtitle'

  render(
    <Modal>
      <ModalOpenButton>
        <button>Open</button>
      </ModalOpenButton>
      <ModalContents title={title} subtitle={subtitle}>
        <ModalBody>
          <div>Modal content</div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContents>
    </Modal>
  )

  userEvent.click(screen.getByRole('button', { name: 'Open' }))

  const inModal = within(screen.getByRole('dialog'))
  expect(inModal.getByText(title)).toBeInTheDocument()

  userEvent.click(inModal.getByRole('button', { name: 'Close' }))

  await waitForElementToBeRemoved(() => screen.queryByRole('dialog'))

  const modal = screen.queryByRole('dialog')

  expect(modal).not.toBeInTheDocument()
})
