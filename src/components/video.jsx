import splash from '/sauron.gif'
import { Box, Image } from '@chakra-ui/react'

export const Video = () => (
  <Box position={'absolute'} zIndex={-1} height={'100vh'} width={'100vw'}>
    <Image src={splash} boxSize={'100%'} objectFit='cover'/>
  </Box>
)