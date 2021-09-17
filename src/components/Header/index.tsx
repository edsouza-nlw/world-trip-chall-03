import Link from 'next/link'
import { useRouter } from 'next/router'

import { Box, Flex, Icon } from '@chakra-ui/react'
import { RiArrowDropLeftLine } from 'react-icons/ri'

import { Logo } from '../Logo'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Flex
      as="header"
      py="3.125rem"
      h="3.125rem"
      w="100%"
      bg="base_white.50"
      align="center"
      justify="center"
    >
      <Box as="a" href="/">
        {asPath !== '/' && (
          <Icon
            as={RiArrowDropLeftLine}
            fontSize={{ base: '25px', md: '36px' }}
            color="gray.200"
            position="absolute"
            top={{ base: '2.5rem', sm: '2.3rem', md: '2.2rem' }}
            left="20px"
            cursor="pointer"
          />
        )}
        <Logo />
      </Box>
    </Flex>
  )
}
