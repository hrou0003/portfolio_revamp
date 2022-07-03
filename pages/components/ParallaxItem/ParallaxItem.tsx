import React, { useRef, useState, useLayoutEffect } from "react";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion";

const calculateMinHeight = (height, range) => {
  return height + height * range;
};

const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};

type Props = {
    className?: string;
    children: JSX.Element;
}

const ParallaxItem: React.FC<Props> = ({ className, children}) => {
  const range = 0.2;
  const { scrollY } = useViewportScroll();
  const ref = useRef();
  const [offsetTop, setOffsetTop] = useState(0);
  const [minHeight, setMinHeight] = useState("auto");
  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 3)
  };

   useLayoutEffect(() => {
    if (!ref.current) return null;
    const onResize = () => {
      setOffsetTop(ref.current?.offsetTop);
      setMinHeight(calculateMinHeight(ref.current?.offsetHeight, range));
    };

    onResize();
    window.addEventListener("resize", onResize);
 
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);
  

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop + 1000, offsetTop - 1000],
      ["0%", `${range * 100}%`]
    ),
    springConfig
  );

  return (
    <div style={{ minHeight }} className={className}>
      <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

export default ParallaxItem;