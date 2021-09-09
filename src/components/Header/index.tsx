import { Flex } from '@chakra-ui/react'
import { Logo } from '../Logo'

export function Header() {
  return (
    <Flex
      as="header"
      py="3.125rem"
      h="3.125rem"
      w="100%"
      bg="base_white.50"
      alignItems="center"
      justifyContent="center"
    >
      <Logo />
    </Flex>
  )
}
