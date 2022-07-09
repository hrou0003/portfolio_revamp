import { motion } from "framer-motion";
import Accordion from "./Accordion";

type Props = {
  width: number;
  label: JSX.Element;
  i: number;
  expanded: number | false;
  setExpanded: (arg0: number | false) => void;
};

const Skill: React.FC<Props> = (props) => {
  const skillLineVariants = {
    visible: { pathLength: props.width, transition: { duration: 1 } },
    hidden: { pathLength: 0 },
  };

  const isOpen = props.i === props.expanded;

  return (
    <div className="content-center">
      <motion.div
        className="flex text-center max-w-[90vw] m-auto px-5"
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        onClick={() => props.setExpanded(isOpen ? false : props.i)}
      >
        <div className="pr-4 py-1">{props.label}</div>
        <motion.svg
          height="50"
          width="100%"
          className="stroke-slate-200 stroke-[10px] lg:stroke-[30px]"
        >
          <line
            x1="15"
            y1="15"
            x2="90%"
            y2="15"
            className="stroke-slate-500"
            strokeLinecap="round"
          />
          <motion.line
            x1="15"
            y1="15"
            x2="90%"
            y2="15"
            strokeLinecap="round"
            variants={skillLineVariants}
            initial="hidden"
            whileInView="visible"
            className="stroke-[10px] lg:stroke-[30px]"
            viewport={{ once: true }}
          />
        </motion.svg>
      </motion.div>

      <Accordion
        i={props.i}
        expanded={props.expanded}
        setExpanded={props.setExpanded}
      >
        <div>
          <div className="rounded-md p-4 text-slate-200 text-center">
            Testing Testing Testing Testing Testing Testing Testing
          </div>
          <div className="opacity-100 h-5 shadow-none"></div>
        </div>
      </Accordion>
    </div>
  );
};

export default Skill;
