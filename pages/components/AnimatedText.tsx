import { motion } from "framer-motion";

type Props = {
    className: string;
    text: string;
}


const AnimatedText: React.FC<Props> = ({ text, className}) => {

    const sentence = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        }
    }

    const animateLine = (line: string) => (
        line.split("").map((char, index) => {
            return (
                <motion.span 
                    key={char + "-" + index}
                    variants={letter}
                >
                    {char}
                </motion.span>
            )
        })
    )
    return (
        <motion.h3
            variants={sentence}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {animateLine(text)}
        </motion.h3>
    )
}

export default AnimatedText;