import { faEllipsisVertical, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  });

  const variants = {
    visible: { opacity: 1, x: 0, type: 'spring', damping: 100 },
    hidden: { opacity: 0, x: "100%" },
  };

  const onClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="text-white">{open}</div>
      <div
        className="fixed ml-[93vw] mr-4 mt-[35vh] z-30 p-3"
        onClick={() => setOpen(!open)}
      >
        {/* open mobile menu buttons */}
        {open ? (
          <FontAwesomeIcon icon={faXmark} fontSize="1.5rem" color="white" />
        ) : (
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            fontSize="1.5rem"
            color="white"
          />
        )}
      </div>
      <AnimatePresence>
        {/* toggle mobile menu - dependent on button state */}
        {open ? (
          <motion.div
            key="modal"
            variants={variants}
            whileInView="visible"
            animate="visible"
            initial="hidden"
            exit="hidden"
            className="fixed z-10 w-screen h-screen bg-slate-700"
          >
            <div className="z-30 mt-[25vh] rounded-md bg-slate-700 p-10">
              <Navbar mobile={true} onClick={onClick} open={open} />
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
