import { motion } from "framer-motion";

import React from 'react'



function SlideHighlights() {

    const variants = {
        initial: {
            '-100%'
        },
        moveOut: {
            x: '100%'
        },
        moveIn: {
            x: '0%'
        }
    }
  return (
    <div>
        <motion.div
            style={{
                position: 'absolute'
            }}
        >
            test
        </motion.div>
        <motion.div
        style={{
                position: 'absolute',
                background: 'white',
                color: 'blue'
            }}
        >
            test
        </motion.div>
    </div>
  )
}

export default SlideHighlights