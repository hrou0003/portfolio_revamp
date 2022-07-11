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
        className="m-auto rounded-md border-white p-2 text-center w-4/5"
        variants={variants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-6xl text-slate-200 p-2 mb-5">
          <TextHighlight inView={true}>
            <span>Hi, my name is <br></br> Harrison</span>
          </TextHighlight>
        </h1>
        <p className="relative text-slate-400 text-lg md:text-3xl mx-auto z-5">
          I&apos;m a recent graduated in applied mathematics and computer
          science from Monash University currently working at Bank of Queensland
          as a <TextHighlight inView={true}>Data Analyst</TextHighlight>. I am looking to move
          into the field of <TextHighlight inView={true}>Software Engineering</TextHighlight>.
        </p>
      </motion.div>
    </div>
  );
};

export default Introduction;
