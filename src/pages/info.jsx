import Hero from "../components/hero";
import { motion } from "framer-motion";
import { BackButton } from "../components/backButton";

const data = [ {first:"A RETURN FROM",second:"THE ABYSS"}, {first:"IS CELEBRATED", second:"IN BLOOD"}]

const Info = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <BackButton/>
            <Hero data={data} />
        </motion.div>
    )
}
export default Info