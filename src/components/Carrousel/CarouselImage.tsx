import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface CarouselImageProps {
  id: number
  slug: string
  image: string
  name: string
  description: string
}

export default function CarouselImage({
  id,
  slug,
  image,
  name,
  description,
}: CarouselImageProps) {
  return (
    <Link href={`continent/${slug}`}>
      <Flex
        backgroundImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        cursor="pointer"
        w="100%"
        h={['250px', '450px']}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          w="100%"
          color="base_white.50"
        >
          <Text fontWeight="600" fontSize={['24px', '48px']}>
            {name}
          </Text>
          <Text fontWeight="500" fontSize={['14px', '24px']}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Link>
  )
}
