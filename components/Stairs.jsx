import { motion } from "framer-motion"


const stairsAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
};

const totalSteps = 6;

const reverseIndex = (index) => totalSteps - index - 1;

const Stairs = () => {
    return (
        <>
            {[...Array(totalSteps)].map((_, index) => (
                <motion.div
                    key={index}
                    {...stairsAnimation}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-indigo-900 relative"
                />
            ))}
        </>
    );
};

export default Stairs;