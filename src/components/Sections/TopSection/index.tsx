import { Box, Flex, Heading, Text, Image, Spacer } from '@chakra-ui/react'

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
      <Flex>
        <Box p="4">
          <Heading color="base_white.200" fontSize="2.25rem" fontWeight="500">
            5 Continentes,
          </Heading>
          <Heading
            color="base_white.200"
            fontSize="2.25rem"
            fontWeight="500"
            mb={4}
          >
            infinitos destinos
          </Heading>
          <Text color="base_white.400" fontSize="1.25rem" fontWeight="400">
            Chegou a hora de tirar do papel a viagem que você
          </Text>
          <Text color="base_white.400" fontSize="1.25rem" fontWeight="400">
            sempre sonhou.
          </Text>
        </Box>
        <Spacer />
        <Box p="4">
          <Image
            boxSize="418px"
            w="270px"
            h="417px"
            objectFit="cover"
            src="/airplane.png"
            alt="Segun Adebayo"
          />
        </Box>
      </Flex>
    </Flex>
  )
}
