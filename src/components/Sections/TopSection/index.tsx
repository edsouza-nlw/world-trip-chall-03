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
      <Flex direction="row" justifyContent="space-between">
        <Flex
          mx={12}
          pb={{ base: 10, md: 6 }}
          direction="column"
          justifyContent="center"
        >
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
        </Flex>
        <Box mx={12}>
          <Image
            objectFit="contain"
            src="/airplane.png"
            alt="Ignite World Trip"
            mt={{ base: 10, md: 28 }}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
