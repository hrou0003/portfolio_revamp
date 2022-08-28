import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
    about: JSX.Element;
  code: JSX.Element;
};

const BorderBox: React.FC<Props> = ({ about, code }) => {
  const [clicked, setClicked] = useState(false);
  const variants = {
    initial: { rotateY: 0, transition: { duration: 0.35 } },
    hover: {
      x: -10,
      y: -10,
      borderColor: "grey",
    },
    tap: {
      rotateY: 180,
      transition: { duration: 0.35 },
      zIndex: 10,
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
    exit: { rotateY: 170, transition: { duration: 3 } },
  };

  return (
    <div className="relative w-fit m-auto">
        {clicked ? 
      <motion.div
        className="absolute flex bg-white mb-2 mr-2"
        variants={variants}
        initial="initial"
        animate={clicked ? "tap" : "initial"}
        whileHover="hover"
        onClick={() => setClicked(!clicked)}
      >
        {code}
      </motion.div>
      :
      <motion.div
        className="absolute flex bg-white mb-2 mr-2"
        variants={variants}
        initial="initial"
        animate={clicked ? "tap" : "initial"}
        whileHover="hover"
        onClick={() => setClicked(!clicked)}
      >
        {about}
      </motion.div>}
      <div className="bg-slate-900 ml-0 mt-0 flex">
        <div className="invisible">{code}</div>
      </div>
    </div>
  );
};

export default BorderBox;
