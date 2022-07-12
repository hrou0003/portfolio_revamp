import { motion } from "framer-motion"

type Props = {
    children?: JSX.Element;
}


const BorderBox: React.FC<Props> = ({ children }) => {

    const variants = {
        hover: {
            x: -2,
            y: -2,
            borderColor: "grey"
        }
    }

    return (

        <div className="relative w-fit m-auto">

            <motion.div className="absolute flex bg-white mb-2 mr-2"
                variants={variants}
                whileHover="hover"
            >
                {children}
            </motion.div>
            <div className="bg-slate-900 ml-2 mt-2 flex">
                <div className="invisible">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BorderBox;