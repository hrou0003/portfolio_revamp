import styled from "styled-components";

export const TextDrop = styled.h1`
  line-height: 1.2em;
  color: #0000;
  text-shadow: 0 0 #fff, 0 1.2em #fff;
  overflow: hidden;
  transition: 0.3s;

  &:active {
    text-shadow: 0 -1.2em #fff, 0 0 #fff;
  }
`;

import React, { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  components: ReactNode[];
};

const variants = {
  initial: {
    x: '-100%',
    transition: {duration: 1}
  },
  moveIn: {
    x: ['-100%', '0%', '100%'],
    transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 10}
  },
  moveOut: {
    x: '100%',
    transition: {duration: 1}
  },
};

function TextCycle({ components }: Props) {
  const [currentComponent, setCurrentComponent] = useState({
    currentComponent: components[0],
    index: 0,
  });

  useEffect(() => {
    const selectNextComponent = () => {
      let nextIndex = (currentComponent.index + 1) % components.length;
      setCurrentComponent((prev) => ({
        currentComponent: <motion.div key={prev.index} variants={variants} initial="initial" whileInView="moveIn" exit="moveOut">{components[nextIndex]}</motion.div>,
        index: nextIndex,
      }));
    };
    const interval = setInterval(() => {
      selectNextComponent();
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <AnimatePresence>
        <div
            style={{ overflow: 'hidden', alignItems: 'center'}}
        >
            <div style={{ margin: 'auto' }}>
                {currentComponent.currentComponent}
            </div>
        </div>
    </AnimatePresence>
  );
}

export default TextCycle;
