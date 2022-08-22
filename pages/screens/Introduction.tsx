// import AnimatedText from "../components/AnimatedText";
import { LayoutGroup, motion } from "framer-motion";
import FadeIn from "../../components/FadeIn";
import PunchedText from "../../components/TextAnimations/PunchedText";
import { ShadowBox } from "../../components/ShadowBox";
import { AnimateTextBackground } from "../../components/TextAnimations/TextBackground";

import TextHighlight from "../../components/TextAnimations/TextHighlight";
import TextCycle, { TextDrop } from "../../components/TextAnimations/TextDrop";

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
      <FadeIn
        className="m-auto rounded-md border-white p-2 text-center w-4/5 lg:w-3/5"
      >
        <LayoutGroup id="intro">

        <>
        <h1 className="text-3xl md:text-6xl text-slate-200 p-2 mb-5">
          <PunchedText text="Harrison" textColor="rgb(51 65 85)"/>
          <h1>ROUILLARD</h1>
        </h1>
        <p className="relative text-slate-400 text-lg md:text-3xl mx-auto z-5">
          I&apos;m a graduate in applied mathematics and computer
          science from Monash University currently working at Bank of Queensland
          as a <AnimateTextBackground>Data Analyst</AnimateTextBackground>. I have a passion for all things <AnimateTextBackground>Software</AnimateTextBackground>&nbsp; 
          and am looking to move into the field of <AnimateTextBackground >Software Engineering</AnimateTextBackground>.
        </p>
        </>
        </LayoutGroup>
      </FadeIn>
    </div>
  );
};

export default Introduction;
