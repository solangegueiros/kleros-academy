import { Box, Flex, Center, Heading, Image, Text, useColorModeValue, VStack, SimpleGrid } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Container, Layout, Seo } from '@components'
import { useGradient } from '@hooks/useGradient'

const Home = (): JSX.Element => {
  const gradient1 = useGradient('to-r')
  const gradient2 = useGradient('to-l')

  const { t } = useTranslation('common')

  return (
    <Layout isStretched>
      <Seo title={t`home`} description='Rsk Academy' />
      <Box
        bgGradient={useColorModeValue(
          'linear(to-br,primary.500,primary.300,light.500)',
          'linear(to-t,light.900,dark.600)',
        )}
        mt={-8}
      >
        <Container>
          <SimpleGrid alignItems='center' h='calc(100vh - 70px)' columns={{ base: 1, lg: 2 }}>
            <Center color='white'>
              <Box px={{ base: 2, lg: 8 }} py={8} h='full'>
                <Heading mb={4} color='white'>
                  {t`homePage.slogan`}
                </Heading>
                <Text fontSize='1.4em' maxW='container.md'>
                  {t`homePage.slogan2`}
                </Text>
              </Box>
            </Center>
            <Center p={8}>
              <Image w='full' objectFit='cover' src='/img/home.png' />
            </Center>
          </SimpleGrid>
        </Container>
      </Box>

      <Container py={32} mb={16}>
        <VStack textAlign='center' spacing={4}>
        </VStack>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
