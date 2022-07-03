import React, { useState } from 'react';

import { motion, AnimateSharedLayout, useViewportScroll } from 'framer-motion';
import { Link } from 'react-scroll';
import MenuItems from './MenuItems';


type Props = {
  url: string;
  text: string;
  selected: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<Props> = ({ url, text, selected, onClick }) => (
  <Link
      to={url}
      spy={true}
      smooth={true}
      duration={500}
      onSetActive={onClick}
      className="menu-item text-xs md:text-xl lg:text-3xl"
    >
  <motion.div
    animate={{ opacity: selected ? 1 : .5 }}
    className="text-xs md:text-xl lg:text-3xl"
  >
  
    {text}
    {selected && (
      <motion.div
        className="underline"
        layoutId="underline"
      />
    )}
  </motion.div>
  </Link>
)

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  /** add useState hook to manage state **/
  const [hidden, setHidden] = React.useState(true);

  const { scrollY } = useViewportScroll();

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
      console.log("visible");
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
      console.log("hidden");
    }
  }

  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  /** add this const **/
  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 }
  };

  return (
    <motion.div
      className="fixed bg-slate-400 p-4 opacity-30 w-full"
      /** the variants object needs to be passed into the motion component **/
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      animate={hidden ? "hidden" : "visible"}
      initial={false}
      whileHover="visible"
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <div className="wrapper">
        <AnimateSharedLayout>
          {MenuItems.map((el: any, i: number) => (
            <MenuItem
              url={el.url}
              text={el.label}
              key={i}
              selected={selected === i}
              onClick={() => setSelected(i)}
            />
          ))}
        </AnimateSharedLayout>
      </div>
    </motion.div>
  )
}

export default Navbar;