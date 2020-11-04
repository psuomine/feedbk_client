import { Text, Box } from '@chakra-ui/core'
import Content from 'components/layout/Content'
import AddSiteModal from 'features/sites/AddSiteModal'

const SitesView = () => {
  return (
    <>
      <Content>
        <Box d="flex" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="500">
            Sites
          </Text>
          <AddSiteModal />
        </Box>
      </Content>
    </>
  )
}

export default SitesView
