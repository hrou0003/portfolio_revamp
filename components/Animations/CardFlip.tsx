import styled from "styled-components";
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";


type Props = {
    backComponent: JSX.Element;
    frontComponent: JSX.Element;
}


function CardFlip({ backComponent, frontComponent }: Props) {

    const [hovered, setHovered] = useState(false)

    const variants = {
        initial: {
            rotateY: 180
        },
        hover: {
            rotateY: 180,
            transition: { duration: .35 }
        }
    }

    const sideCardStyle = {
        backfaceVisibility: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }

    return (
        <div
            onMouseEnter={() => setHovered(prev => !prev)}
            onMouseLeave={() => setHovered(prev => !prev)}
        >

        <AnimatePresence exitBeforeEnter initial={true}>
            {hovered ?
                    <motion.div
                        key={"back"}
                        initial={{ rotateY: 90 }}
                        animate={{ rotateY: 0, transition: { duration: .15 }}}
                        exit={{ rotateY: 90 , transition: {duration: .15 }}}
                    >
                            {frontComponent}
                    </motion.div>
                :
                    <motion.div
                        initial={{ rotateY: 90 }}
                        animate={{ rotateY: 0, transition: { duration: .15 }}}
                        exit={{ rotateY: 90 , transition: {duration: .15 }}}
                        key={"front"}
                    >
                        {backComponent}
                    </motion.div>
            }
        </AnimatePresence>
        </div>
    )
}

export default CardFlip

