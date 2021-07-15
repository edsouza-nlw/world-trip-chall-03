import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'

export function TopSection() {
  return (
    <Flex
      direction="column"
      h="23rem"
      bgImage="/background.png"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Heading color="base_white.200" fontSize="2.25rem">
        5 Continentes,
      </Heading>
      <Heading color="base_white.200" fontSize="2.25rem" mb={4}>
        infinitos destinos
      </Heading>
      <Text color="base_white.400" fontSize="1.25rem">
        Chegou a hora de tirar do papel a viagem que você
      </Text>
      <Text color="base_white.400" fontSize="1.25rem">
        sempre sonhou.
      </Text>
      <Image
        boxSize="100px"
        objectFit="cover"
        src="/airplane.png"
        alt="Segun Adebayo"
      />
    </Flex>
  )
}
