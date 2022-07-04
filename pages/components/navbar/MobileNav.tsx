import { faBars, faCross, faHamburger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const onClick = () => {
        setOpen(false)
        console.log(`it's up here ${open}`)
    }

    return (
        <div>
            <div className="fixed ml-96 float-right z-30" onClick={() => setOpen(!open)}>
                {open}
                {open ? <FontAwesomeIcon icon={faXmark} fontSize="1.5rem" color="white" /> : <FontAwesomeIcon icon={faBars} fontSize="1.5rem" color="white" />}
            </div>
            {open ?
                <motion.div
                    variants={variants}
                    whileInView="visible"
                    initial="hidden"
                    className="fixed z-10 w-screen h-screen bg-slate-700">
                    <div className="z-30 m-auto rounded-md bg-slate-700 p-4">
                        <Navbar mobile={true} onClick={onClick} open={open} />
                    </div>
                </motion.div> :
                <></>
            }
        </div>
    )
}

export default MobileNav;