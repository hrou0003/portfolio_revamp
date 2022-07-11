import { motion } from "framer-motion";
import { generateTextAtribs } from "../utils/generateTextAtribs";
import Accordion from "./Accordion";
import BorderBox from "./BorderBox";

type Props = {
  width: number;
  label: JSX.Element;
  i: number;
  expanded: number | false;
  setExpanded: (arg0: number | false) => void;
};

const Skill: React.FC<Props> = (props) => {

  let [color, angle] = generateTextAtribs();


  const skillLineVariants = {
    visible: { pathLength: props.width, transition: { duration: 1 } },
    hidden: { pathLength: 0 },
  };

  const isOpen = props.i === props.expanded;

  const hoverVariants = {
    hover: {
      stroke: color,
      color: color,
    },
    open: {
      stroke: color,
      color: color,
    }
  }

  return (
    <div className="content-center">
      <motion.div
        className="flex text-center max-w-[90vw] m-auto px-5 stroke-slate-200 text-slate-200"
        onClick={() => props.setExpanded(isOpen ? false : props.i)}
        variants={hoverVariants}
        whileHover="hover"
        animate={isOpen ? "open" : ""}
      >
        <div className="w-[7%]">{props.label}</div>
        <motion.svg
          height="50"
          width="100%"
          className={`stroke-[10px] lg:stroke-[30px]`}
        >
          <line
            x1="15"
            y1="15"
            x2="90%"
            y2="15"
            className="stroke-slate-500"
          />
          <motion.line
            x1="15"
            y1="15"
            x2="90%"
            y2="15"
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
        <div className="p-5 m-auto text-center w-1/2">
          <span>Testing Testing Testing Testing Testing Testing Testing</span>
          <div className="opacity-100 h-5 shadow-none"></div>
        </div>
      </Accordion>
    </div>
  );
};

export default Skill;
