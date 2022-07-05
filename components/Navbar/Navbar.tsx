import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { motion, AnimateSharedLayout, useViewportScroll } from 'framer-motion';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
    <div className='inline-flex'>
      <Link
        to={url}
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={onClick}
        className="menu-item text-xl lg:text-3xl w-full"
      >
        <motion.div
          animate={{ opacity: selected ? 1 : .5 }}
          transition={{ duration: 1 }}
          className="text-xl lg:text-3xl"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {text}
        </motion.div>

      </Link>
      {selected && (
        <motion.div
          layoutId="underline" className="float-right pl-4 mt-1">
          <FontAwesomeIcon icon={faChevronLeft} className="md:text-xl lg:text-3xl" color="white" />
          {/* <svg width="4" className="stroke-slate-200 h-8">
              <motion.line x1="0" x2="0" y1="0" y2="50" strokeWidth="8" initial={{ pathLength: 0 }} animate={{ pathLength: 1}} transition={{duration: 0.5}}/>
            </svg> */}
        </motion.div>
      )}
    </div>
  )
}

type NavProps = {
  mobile: boolean;
  open?: boolean;
  onClick?: () => void;
}

const Navbar: React.FC<NavProps> = (props) => {
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


  let mainClass = props.mobile ?
    "p-4 opacity-30 mt-40 text-slate-200 z-30 m-auto" :
    "fixed p-4 opacity-30 mt-40 text-slate-200 z-10"

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
      className={mainClass}
      /** the variants object needs to be passed into the motion component **/
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      whileHover="visible"
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <ul className="wrapper">
          {MenuItems.map((el: any, i: number) => (
            <li key={i} className="">
              <MenuItem
                url={el.url}
                text={el.label}
                key={i}
                selected={selected === i}
                onClick={() => setSelected(i)}
              />
            </li>
          ))}
      </ul>
    </motion.div>
  )
}

export default Navbar;