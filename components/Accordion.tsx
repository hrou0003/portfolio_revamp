import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type Props = {
    i: number,
    expanded: number | false;
    setExpanded: (arg0: number | false) => void;
    children?: JSX.Element;
}

const Accordion: React.FC<Props> = ({ i, expanded, setExpanded, children }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 1, height: 0 }
            }}
            transition={{ duration: 0.8}}
            className="max-w-[60vw] m-auto opacity-25 overflow-clip"
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};


export default Accordion;