// import splash from '../assets/sauron.gif'
import { Box, Image } from '@chakra-ui/react'

export const Video = () => (
  <Box position={'absolute'} zIndex={-1} height={'100vh'} width={'100vw'}>
    <Image src={"https://sauronbucket.s3.amazonaws.com/sauron.gif"} boxSize={'100%'} objectFit='cover'/>
  </Box>
)