import { motion } from "framer-motion";

type Props = {
    children: JSX.Element;
}

const MovingBox: React.FC<Props> = ({ children }) => {

    const variants = {
        hover: {
            x: -4,
            y: -4,
        }
    }
    return (

        <div className="w-fit">
            <motion.div className="absolute border-4 bg-white border-white z-2 mt-[-4px] ml-[-4px]" variants={variants} whileHover="hover"  style={{boxShadow: "10px -10px 0 0px #1FC11B" }}>
                {children}
            </motion.div>
            <div className="z-1 fill-black fit">
            </div>
        </div>
    )
}

export default MovingBox;