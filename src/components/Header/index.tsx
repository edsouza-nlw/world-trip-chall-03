import { Flex } from '@chakra-ui/react'
import { Logo } from '../Logo'

export function Header() {
  return (
    <Flex
      as="header"
      h={24}
      w="100%"
      bg="base_white.50"
      alignItems="center"
      justifyContent="center"
    >
      <Logo />
    </Flex>
  )
}
