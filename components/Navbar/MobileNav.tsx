import { faBars, faCross, faHamburger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(open)
    })

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const onClick = () => {
        setOpen(false)
    }

    return (
        <div>
            <div className="text-white">
                {open}
            </div>
            <div className="fixed ml-[95vw] mt-[35vh] z-30" onClick={() => setOpen(!open)}>
                {open ? <FontAwesomeIcon icon={faXmark} fontSize="1.5rem" color="white" /> : <FontAwesomeIcon icon={faBars} fontSize="1.5rem" color="white" />}
            </div>
            <AnimatePresence>
            {open ?
                <motion.div
                    key="modal"
                    variants={variants}
                    whileInView="visible"
                    initial="hidden"
                    exit="hidden"
                    className="fixed z-10 w-screen h-screen bg-slate-700">
                    <div className="z-30 mt-[25vh] rounded-md bg-slate-700 p-10">
                        <Navbar mobile={true} onClick={onClick} open={open} />
                    </div>
                </motion.div> :
                <></>
            }
            </AnimatePresence>
        </div>
    )
}

export default MobileNav;