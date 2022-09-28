import Hero from "../components/hero";
import { motion } from "framer-motion";
import { BackButton } from "../components/backButton";

const data = [ {first:"FIRST,",second:"THE MEN"}, {first:"THEN,", second:"THE ELVES"}, {first: "AND LAST,", second: "THE DWARVES"}]

const Roadmap = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <BackButton/>
            <Hero data={data} />
        </motion.div>
    )
}

export default Roadmap