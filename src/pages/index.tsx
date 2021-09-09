import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { TopSection } from '../components/Sections/TopSection'
import { IconSection } from '../components/Sections/IconSections'
import CarrouselSection from '../components/Carrousel'

import db from '../../db.json'

export default function Home() {
  const { continents } = db

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
        <CarrouselSection continents={continents} />
      </Flex>
    </>
  )
}
