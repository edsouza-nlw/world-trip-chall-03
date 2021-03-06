import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

export function TopSection() {
  const isWideScreen = useBreakpointValue({
    sm: false,
    md: true,
  })

  return (
    <Flex
      direction="column"
      h={{ base: '10.1rem', md: '23.5rem' }}
      bgImage="/background.png"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex direction="row" justifyContent="space-between">
        <Flex
          direction="column"
          px={{ base: '1rem', md: '3.6rem' }}
          py={{ base: '1.5rem', md: '6rem' }}
          justify="center"
        >
          <Heading
            fontSize={{ base: '20px', lg: '36px' }}
            fontWeight="500"
            mt={{ base: 'none', md: '-4rem' }}
            color="base_white.200"
          >
            5 Continentes,
          </Heading>
          <Heading
            fontSize={{ base: '20px', lg: '36px' }}
            fontWeight="500"
            color="base_white.200"
            mb={4}
          >
            infinitas possibilidades.
          </Heading>
          <VStack spacing={2}>
            <Text
              fontSize={{ base: '13px', lg: '20px' }}
              fontWeight="400"
              color="base_white.400"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </VStack>
        </Flex>
        {!isWideScreen ? null : (
          <Box mx={12} zIndex={10}>
            <Image
              src="/airplane.png"
              objectFit="contain"
              objectPosition="bottom left"
              h="16.9rem"
              w="29.4rem"
              mt="8.8rem"
              alt="Ignite World Trip"
            />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
