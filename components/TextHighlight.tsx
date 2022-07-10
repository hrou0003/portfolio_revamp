import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { generateTextAtribs } from "../utils/generateTextAtribs";

type Props = {
  color?: string;
  angle?: number;
  children?: JSX.Element | string;
  inView?: boolean;
};


const TextHighlight: React.FC<Props> = ({ children, inView }) => {
  const [hovered, setHovered] = useState(false);

  let [color, angle] = generateTextAtribs();

  const variants = {
    hover: {
      rotate: angle,
      backgroundColor: color,
      text: "white"
    },
    initial: {
      backgroundColor: color,
    }
    
  };


  return (
    <div
      className={`inline-block ${inView ? "mt-2 mx-1" : ''}`}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
    <AnimatePresence>
      <motion.div
        className={`z-5 absolute mt-[-8px] ml-[-8px] p-1 text-white m-[-2px]`}
        variants={variants}
        whileHover="hover"
        animate={inView ? "hover" : ""}
      >
        {children}
      </motion.div>
    </AnimatePresence>
      <span className="text-transparent">{children}</span>
    </div>
  );
};

export default TextHighlight;
