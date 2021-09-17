import { Flex, Text } from '@chakra-ui/react'

interface BannerSectionProps {
  image: string
  name: string
}

export default function BannerSection({ image, name }: BannerSectionProps) {
  return (
    <Flex
      backgroundImage={`url(${image})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      w="100%"
      minH="500px"
      direction="column-reverse"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      pl={{ base: 'null', md: '5.4rem' }}
      pb={{ base: 'null', md: '3.6rem' }}
    >
      <Text fontSize="48px" fontWeight="600" color="base_white.50">
        {name}
      </Text>
    </Flex>
  )
}
