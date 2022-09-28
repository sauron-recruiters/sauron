import {
    Box,
    Container,
    Heading,
    Center,
    Text,
    Button,
    Stack
  } from '@chakra-ui/react';
  import {Link} from 'react-router-dom'
  
export default function Hero(props) {
  return (
      <Stack 
        direction={'row'}
        textAlign={'center'}
        justifyContent={'center'}
        align={'center'}
        spacing={{ base: 8, md: "200px" }}
        py={28} px={10}>
        {props.data.map( (d) => (
          <Button rounded={'lg'} _hover={{'bg':'blue.200'}} zIndex={5}>
            <HeroBanner {...d} />
          </Button>
        ))}
      </Stack>
  );
}

const HeroBanner = (props) => (
  <Heading
    minWidth={'200px'}
    fontFamily='Wolfsburg-Regular'
    fontWeight={100}
    fontSize={{ base: '3xl', sm: '4xl', md: '4xl' }}
    lineHeight={'110%'}
    style={{ color: "#fff", textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #DC143C, 0 0 40px #DC143C, 0 0 50px #DC143C, 0 0 60px #DC143C, 0 0 70px #DC143C"
          }} >
      <Text fontFamily='Wolfsburg-Regular' as={'span'} color={'red.700'}> 
        {props.first}{' '} <br/>
      </Text>
      {props.second}
  </Heading>
)


