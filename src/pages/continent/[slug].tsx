import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { Flex } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import BannerSection from '../../components/Sections/BannerSection'
import CountryInfoSection from '../../components/Sections/InfoContinent'
import Gallery from '../../components/Sections/Gallery'

import db from '../../../db.json'

export interface Country {
  id: number
  name: string
  flag: string
  capital: string
  image: string
}

interface ContinentProps {
  id: number
  slug: string
  name: string
  description: string
  text: string
  numberOfCountries: number
  numberOfLanguages: number
  bannerImage: string
  carrouselImage: string
  countries: Country[]
}

export default function Continent() {
  const { continents } = db

  const router = useRouter()
  const [continent, setContinent] = useState<ContinentProps | null>(null)

  const { slug } = router.query

  useEffect(() => {
    const selectedContinent = continents.find(
      (continent) => continent.slug === String(slug)
    )
    // @ts-ignore
    setContinent(selectedContinent)
  }, [slug])

  return (
    <>
      <Head>
        <title>World Trip</title>
        <meta name="Continent" content="Generated for Rocket Seat Ignite" />
      </Head>

      <Flex direction="column" h="100vh">
        <Header />

        {continent && (
          <BannerSection image={continent.bannerImage} name={continent.name} />
        )}
        {continent && (
          <CountryInfoSection
            text={continent.text}
            numberOfCountries={continent.numberOfCountries}
            numberOfLanguages={continent.numberOfLanguages}
          />
        )}
        {continent && <Gallery countries={continent.countries} />}
      </Flex>
    </>
  )
}
