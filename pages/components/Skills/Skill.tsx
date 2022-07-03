
import { motion } from "framer-motion"

type Props = {
    width: number;
    label: JSX.Element;
}

const Skill: React.FC<Props> = (props) => {

    return (
        <motion.div className="flex text-center" whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}>
            <div className="pr-4 py-1">
                {props.label}
            </div>
            <motion.svg height="50" width="500" className="stroke-slate-200 stroke-12" >
                <line x1="15" y1="15" x2="415" y2="15" stroke-width="30px" className="stroke-slate-500" strokeLinecap="round" />
                <motion.line x1="15" y1="15" x2="415" y2="15" stroke-width="30px" strokeLinecap="round" initial={{ pathLength: 0 }}
                    animate={{ pathLength: props.width }} transition={{ duration: 1 }} />
            </motion.svg>

        </motion.div>
    )
}

export default Skill;