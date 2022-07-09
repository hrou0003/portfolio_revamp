import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { generateTextAtribs } from "../utils/generateTextAtribs";

type Props = {
  color?: string;
  angle?: number;
  children?: JSX.Element | string;
};


const TextHighlight: React.FC<Props> = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  let [color, angle] = generateTextAtribs();

  const variants = {
    hover: {
      rotate: 2,
      backgroundColor: color,
    },
    
  };


  return (
    <div
      className="inline-block"
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
    <AnimatePresence>
      <motion.div
        className={`z-30 absolute mt-[-8px] ml-[-8px] text-transparent hover:text-white hover:underline p-2 m-[-2px] overflow-clip`}
        variants={variants}
        whileHover="hover"
        initial={{ rotate: angle }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
      <span className={hovered ? 'text-transparent' : ''}>{children}</span>
    </div>
  );
};

export default TextHighlight;
