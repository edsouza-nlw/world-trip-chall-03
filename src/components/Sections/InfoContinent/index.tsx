import { Box, Flex, Grid, Icon, Text, Tooltip, VStack } from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri'

interface TextInfoProps {
  text: string
  numberOfCountries: number
  numberOfLanguages: number
}

export default function InfoContinent({
  text,
  numberOfCountries,
  numberOfLanguages,
}: TextInfoProps) {
  return (
    <Flex w="100%" bgColor="base_white.50" align="center">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <Box
          py={{ base: '2rem', md: '4rem' }}
          px={{ base: '1rem', md: '2rem', lg: '4rem', xl: '5.4rem' }}
        >
          <Text
            textAlign="justify"
            fontWeight="400"
            fontSize={{ base: '24px', lg: '24px' }}
            color="gray.500"
          >
            {text}
          </Text>
        </Box>

        <Box
          py={{ base: '0.1rem', md: '9rem' }}
          px={{ base: '0.5rem', md: '2rem' }}
        >
          <Flex w="100%" justifyContent="space-around" alignItems="center">
            <Box textAlign="center">
              <Text
                fontSize="24px"
                lineHeight="36px"
                fontWeight="600"
                color="base_orange.400"
              >
                {numberOfCountries}
              </Text>
              <Text fontSize="18px" fontWeight="600" color="base_dark.300">
                países
              </Text>
            </Box>
            <Box textAlign="center">
              <Text
                fontSize="24px"
                lineHeight="36px"
                fontWeight="600"
                color="base_orange.400"
              >
                {numberOfLanguages}
              </Text>
              <Text fontSize="18px" fontWeight="600" color="base_dark.300">
                línguas
              </Text>
            </Box>
            <Box textAlign="center">
              <VStack spacing="-1.3rem">
                <Text
                  fontSize="24px"
                  lineHeight="36px"
                  fontWeight="600"
                  color="base_orange.400"
                  mt="0.5rem"
                >
                  27
                </Text>
                <Text fontSize="18px" fontWeight="600" color="base_dark.300">
                  cidades 100+
                  <Tooltip
                    label="100+ são as melhores"
                    bg="base_dark.100"
                    color="gray.100"
                    borderRadius="4"
                    placement="bottom-start"
                    fontWeight="300"
                    fontSize="14px"
                    hasArrow
                  >
                    <span>
                      <Icon
                        as={RiInformationLine}
                        fontSize="16px"
                        color="gray.200"
                        ml="1"
                      />
                    </span>
                  </Tooltip>
                </Text>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Flex>
  )
}
