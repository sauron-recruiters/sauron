import { GiElvenCastle } from "react-icons/gi"

import { Box, Button, IconButton, Link } from "@chakra-ui/react";
import { Link as RLink} from "react-router-dom";
   
export const BackButton = () => (
    <Box position={'absolute'} top={0} right={0} p={5} zIndex={5}>
        <Link as={RLink} to={'/'}>
            <IconButton icon={<GiElvenCastle fontSize={"45px"} fill={'orange'} _hover={{bg:'blue.200'}} />} />
        </Link> 
    </Box>
)