// import AnimatedText from "../components/AnimatedText";
import { motion } from "framer-motion";

import TextHighlight from "../../components/TextHighlight";

const Introduction = () => {
  const variants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: 200,
      opacity: 0,
    },
  };

  return (
    <div id="intro" className="flex w-screen min-h-screen bg-slate-700 p-8">
      <motion.div
        className="m-auto border-5 rounded-md border-white p-2 text-center"
        variants={variants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
          <h1 className="text-6xl text-slate-200">
        <TextHighlight>
            Hi, my name is Harrison
        </TextHighlight>
          </h1>
        <p className="relative text-slate-400 text-lg md:text-3xl w-2/3 mx-auto z-5">
          I&apos;m a recent graduated in applied mathematics and computer
          science from Monash University currently working at Bank of Queensland
          as a <TextHighlight>Data Analyst</TextHighlight>. I am looking to move
          into the field of software engineering.
        </p>
      </motion.div>
    </div>
  );
};

export default Introduction;
