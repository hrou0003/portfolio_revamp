import React from "react";
import { motion } from "framer-motion";
import { withTheme } from "styled-components";

type Props = {
  text: string;
  textColor: string;
};

function PunchedText({ text, textColor }: Props) {
  const variants = {
    visible: {
      color: "#334454",
    },
    inactive: {
        textColor: 'white',
    }
  };
  return (
    <motion.h1
      style={{
        background: "white",
        color: "white",
        display: "inline-block",
        padding: "5px 15px",
      }}
      whileInView={{ color: "#334454" }}
    >
      {text.toUpperCase()}
    </motion.h1>
  );
}

export default PunchedText;
