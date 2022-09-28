import Hero from "../components/hero";
import Footer from "../components/footer";
import Action from "../components/actions";
import { motion } from "framer-motion"
import { GiElvenCastle } from "react-icons/gi"

import { Box, Button, IconButton, Link } from "@chakra-ui/react";
import { Link as RLink} from "react-router-dom";
import { BackButton } from "../components/backButton";

const data = [ {first:"JOIN THE",second:"DARK ARMY"}, {first:"FULFILL", second:"YOUR DESTINY"}, {first: "WAGE WAR", second: "ON THE UNWORTHY"}]

const Learn = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <BackButton/>
            <Hero data={data} />
        </motion.div>
    )
}

export default Learn