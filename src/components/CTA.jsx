import { Container, Stack, Heading, Text } from "@chakra-ui/react"
export const CTA = () => (
    <Container zIndex={1} position="fixed" margin={10} mt={60} >
        <Stack
          textAlign={'left'}
          align={'left'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 8 }}
          width={'100vw'}>
          <Heading
            stroke={'1px solid black'}
            color={'red.500'}
            fontWeight={300}
            fontSize={{ base: '3xl', sm: '4xl', md: '120px' }}
            lineHeight={'110%'}
            display={'flex'}
            fontFamily={'JMH Wolfa'}
            className={'halfElven'}>
            sauron
          </Heading>
          <Text 
          position={'relative'} as={'span'} color={'orange.300'} fontSize={'5xl'}
          fontFamily={'Wolfsburg-Regular'}>
            the lord of mordor
            </Text>
        </Stack>
    </Container>
)