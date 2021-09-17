import { Flex, Grid, Heading } from '@chakra-ui/react'
import CardImage from './cardImage'

interface Country {
  id: number
  image: string
  name: string
  capital: string
  flag: string
}

interface Continent {
  countries: Country[]
}

export default function Gallery({ countries }: Continent) {
  return (
    <Flex w="100%" direction="column" bgColor="base_white.50" mt="-0.1rem">
      <Heading
        py={{ base: '1rem', md: '1.5rem' }}
        px={{ base: '1rem', md: '4rem' }}
        fontSize="36px"
        fontWeight="500"
        color="gray.600"
      >
        Cidades 100+
      </Heading>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={6}
        py={{ base: '1rem', md: '0.5rem' }}
        px={{ base: '3rem', md: '4rem' }}
      >
        {countries.map((country) => (
          <CardImage
            key={country.id}
            capital={country.capital}
            name={country.name}
            image={country.image}
            flag={country.flag}
          />
        ))}
      </Grid>
    </Flex>
  )
}
