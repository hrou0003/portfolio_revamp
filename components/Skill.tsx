
import { motion } from "framer-motion"

type Props = {
  width: number;
  label: JSX.Element;
}



const Skill: React.FC<Props> = (props) => {

  const skillLineVariants = {
    visible: { pathLength: props.width, transition: { duration: 1 } },
    hidden: { pathLength: 0 }
  }
  return (
    <motion.div className="flex text-center max-w-[90vw] m-auto px-5" whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
      <div className="pr-4 py-1">
        {props.label}
      </div>
      <motion.svg height="50" width="100%" className="stroke-slate-200 stroke-[10px] lg:stroke-[30px]" >
        <line x1="15" y1="15" x2="90%" y2="15"className="stroke-slate-500" strokeLinecap="round" />
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
       />
      </motion.svg>

    </motion.div>
  )
}

export default Skill;