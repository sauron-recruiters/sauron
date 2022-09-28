import { Button, Stack, Box, Heading } from "@chakra-ui/react" 
import { BrowserRouter, Route, Link } from "react-router-dom";

const urls = ['learn', 'info', 'roadmap']

const Action = () => (
    <>
        <Stack spacing={1} direction={'row'} position={'fixed'} right={0} top={0} m={5} zIndex={5}>
            { urls.map(
                (d) => <PageLinks link={d} />
            ) }
        </Stack>
    </>
)

const PageLinks = (props) => (
    <Button rounded={'full'} p={3} height={"100%"} bg={'blackAlpha.700'} 
            color={'orange.300'} variant={'social'} _hover={{color:'red.500'}} >
        <Link to={'/'+props.link}>
            <Heading stroke={'1px solid black'}
                fontWeight={300}
                fontSize={{ base: '3xl', sm: '4xl', md: '25px' }}
                lineHeight={'110%'}
                fontFamily={'Wolfsburg-Regular'}
                display={'flex'}>
                {props.link}
            </Heading>
        </Link>
    </Button>
)

export default Action