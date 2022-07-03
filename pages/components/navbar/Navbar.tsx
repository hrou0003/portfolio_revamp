import React, { useState } from 'react';

import { motion, AnimateSharedLayout, useViewportScroll } from 'framer-motion';
import { Link } from 'react-scroll';

const MenuItems = [
  {
    label: 'Introduction',
    url: "intro",
    active: true,
  },
  {
    label: 'Skills',
    url: "skills",
    active: true,
  },
  {
    label: 'Experience',
    url: "experience",
    active: true,
  },
  {
    label: 'Projects',
    url: "projects",
    active: true,
  },
  {
    label: 'Contact',
    url: "contact",
    active: true,
  }
];


type Props = {
  url: string;
  text: string;
  selected: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<Props> = ({ url, text, selected, onClick }) => {

  const [hovered, setHovered] = useState(false)

  return (
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
        transition={{ duration: 1 }}
        className="text-xs md:text-xl lg:text-3xl grid grid-cols-2 space-x-40"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div>
        {text}
        </div>
        {selected && (
          <motion.div
            layoutId="underline"
            className=''
          >
            <svg height="30" width="4" className="stroke-slate-200">
              <motion.line x1="0" x2="0" y1="0" y2="50" strokeWidth="8" initial={{ pathLength: 0 }} animate={{ pathLength: 1}} transition={{duration: 0.5}}/>
            </svg>
          </motion.div>
        )}
      </motion.div>
    </Link>
  )
}

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  /** add useState hook to manage state **/
  const [hidden, setHidden] = React.useState(true);

  const { scrollY, scrollYProgress } = useViewportScroll();

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
      console.log("visible");
    } else if (scrollY.get() > 100 && scrollY.get() > scrollY.getPrevious()) {
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
      className="fixed p-4 opacity-30 mt-40 w-20 text-slate-200"
      /** the variants object needs to be passed into the motion component **/
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      whileHover="visible"
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <ul className="wrapper">
        <AnimateSharedLayout>
          {MenuItems.map((el: any, i: number) => (
            <li>
              <MenuItem
                url={el.url}
                text={el.label}
                key={i}
                selected={selected === i}
                onClick={() => setSelected(i)}
              /></li>
          ))}
        </AnimateSharedLayout>
      </ul>
    </motion.div>
  )
}

export default Navbar;