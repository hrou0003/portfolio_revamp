import { motion } from "framer-motion";

type Props = {
    children?: JSX.Element;
    className?: string;
}

const FadeIn: React.FC<Props> = ({ children, className }) => {

    const variants = {
        visible: {
            y: 0,
            opacity: 1,
            animate: { duration: 2 }
        },
        hidden: {
            y: 200,
            opacity: 0,
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default FadeIn;