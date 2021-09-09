import { Box, Flex, Text, Divider, useBreakpointValue } from '@chakra-ui/react'

import { WideIconSection } from './wideScreen'
import { MobilIconSection } from './mobilScreen'

export function IconSection() {
  const isWideScreen = useBreakpointValue({
    sm: false,
    md: true,
  })

  return (
    <Flex
      direction="column"
      h={{ base: '26rem', md: '30.5rem' }}
      py={{ base: '2rem', md: '5rem' }}
      bg="base_white.50"
    >
      {isWideScreen ? <WideIconSection /> : <MobilIconSection />}

      <Box align="center" justify="center" py="2rem">
        <Divider w="5.63rem" sx={{ borderColor: 'base_dark.400' }} />
      </Box>
      <Box align="center" justify="center">
        <Text fontSize={{ base: '20px', md: '36px' }} pt={2} fontWeight="400">
          Vamos nessa?
        </Text>
        <Text fontSize={{ base: '20px', md: '36px' }} pt={2} fontWeight="400">
          Então escolha seu continente
        </Text>
      </Box>
    </Flex>
  )
}
