import { Text, Box } from '@chakra-ui/core'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Content from 'components/layout/Content'

const SitesView = () => {
  return (
    <Content>
      <Box d="flex" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="500">
          Sites
        </Text>
        <PrimaryButton>Add new site</PrimaryButton>
      </Box>
    </Content>
  )
}

export default SitesView
