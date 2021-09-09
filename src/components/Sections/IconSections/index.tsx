import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue,
  VStack,
  Grid,
  Divider,
} from '@chakra-ui/react'

export function IconSection() {
  const isWideScreen = useBreakpointValue({
    sm: false,
    md: true,
  })

  return (
    <Flex
      direction="column"
      h={{ base: '10.1rem', md: '23.5rem' }}
      py={{ base: '10.1rem', md: '5rem' }}
      bg="base_white.50"
    >
      <Grid
        templateColumns={{ base: 'repeat(5, 1fr)', md: 'repeat(5, 1fr)' }}
        px={{ base: '10.1rem', md: '2rem' }}
        gap={6}
      >
        <Box w="100%" align="center" justify="center">
          <Image
            src="/cocktail 1.png"
            h="4rem"
            w="4rem"
            objectFit="contain"
            objectPosition="center"
            alt="Ignite World Trip"
          />
          <Text fontSize={{ base: '13px', md: '24px' }} pt={2} fontWeight="400">
            vida noturna
          </Text>
        </Box>
        <Box w="100%" align="center" justify="center">
          <Image
            src="/surf 1.png"
            h="4rem"
            w="4rem"
            objectFit="contain"
            objectPosition="center"
            alt="Ignite World Trip"
          />
          <Text fontSize={{ base: '13px', md: '24px' }} pt={2} fontWeight="400">
            praia
          </Text>
        </Box>
        <Box w="100%" align="center" justify="center">
          <Image
            src="/building 1.png"
            h="4rem"
            w="4rem"
            objectFit="contain"
            objectPosition="center"
            alt="Ignite World Trip"
          />
          <Text fontSize={{ base: '13px', md: '24px' }} pt={2} fontWeight="400">
            moderno
          </Text>
        </Box>
        <Box w="100%" align="center" justify="center">
          <Image
            src="/museum 1.png"
            h="4rem"
            w="4rem"
            objectFit="contain"
            objectPosition="center"
            alt="Ignite World Trip"
          />
          <Text fontSize={{ base: '13px', md: '24px' }} pt={2} fontWeight="400">
            clássico
          </Text>
        </Box>
        <Box w="100%" align="center" justify="center">
          <Image
            src="/earth 1.png"
            h="4rem"
            w="4rem"
            objectFit="contain"
            objectPosition="center"
            alt="Ignite World Trip"
          />
          <Text fontSize={{ base: '13px', md: '24px' }} pt={2} fontWeight="400">
            e mais...
          </Text>
        </Box>
      </Grid>
      <Box align="center" justify="center" py="2rem">
        <Divider w="5.63rem" color="base_dark.200" />
      </Box>
    </Flex>
  )
}
