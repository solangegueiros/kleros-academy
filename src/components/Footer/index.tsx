import { Box, Image, List, ListItem, SimpleGrid, Text, VStack, Link, Button } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

import { Container } from '@components'

export const Footer = (): JSX.Element => {
  const { t } = useTranslation('common')

  return (
    <Box bg='dark.600' color='dark.50' py={16}>
      <Container>
        <SimpleGrid gridTemplateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={16}>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
