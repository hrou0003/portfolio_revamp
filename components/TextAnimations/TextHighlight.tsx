import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { generateTextAtribs } from "../../utils/generateTextAtribs";

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
       backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)']
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
        className={`z-5 absolute flex mt-[-8px] ml-[-8px] p-1 text-white m-[-2px]`}
        variants={variants}
        whileHover="hover"
        animate={inView ? "hover" : ""}
        drag
      >
        {children}
      </motion.div>
    </AnimatePresence>
    </div>
  );
};

export default TextHighlight;
