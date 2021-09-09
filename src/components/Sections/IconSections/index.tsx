import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue,
  VStack,
  Grid,
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
      py={{ base: '10.1rem', md: '6rem' }}
      bg="base_white.50"
    >
      <Grid
        templateColumns={{ base: 'repeat(5, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={6}
      >
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
      </Grid>
    </Flex>
  )
}
