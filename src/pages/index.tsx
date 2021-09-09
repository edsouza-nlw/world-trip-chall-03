import Head from 'next/head'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { TopSection } from '../components/Sections/TopSection'
import { IconSection } from '../components/Sections/IconSections'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated for Rocket Seat Ignite" />
      </Head>

      <Flex direction="column" h="100vh">
        <Header />
        <TopSection />
        <IconSection />
      </Flex>
    </>
  )
}
