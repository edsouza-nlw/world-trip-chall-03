import { Box, Text, Grid } from '@chakra-ui/react'

export function MobilIconSection() {
  return (
    <Box px="2rem">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box w="100%" align="left" justify="center">
          <Text fontSize="18px" fontWeight="500">
            <span>.</span> vida noturna
          </Text>
        </Box>
        <Box w="100%" align="right" justify="center">
          <Text fontSize="18px" fontWeight="500">
            <span>.</span> praia
          </Text>
        </Box>
        <Box w="100%" align="left" justify="center">
          <Text fontSize="18px" fontWeight="500">
            <span>.</span> moderno
          </Text>
        </Box>
        <Box w="100%" align="right" justify="center">
          <Text fontSize="18px" fontWeight="500">
            <span>.</span> clássico
          </Text>
        </Box>
      </Grid>
      <Box w="100%" align="center" justify="center">
        <Text fontSize="18px" fontWeight="500">
          <span>.</span> e mais...
        </Text>
      </Box>
    </Box>
  )
}
