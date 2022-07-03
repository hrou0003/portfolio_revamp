import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Skill from "./Skills/Skill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {

    return (
        <div id="experience" className="flex w-screen min-h-screen bg-gray-600">
            <div className="m-auto">
                <Skill width={0.8} label={<FontAwesomeIcon icon={faPaintBrush} fontSize="1.5rem" color="white"/>}/>
                <Skill width={1}/>
                <Skill width={0.6}/>
            </div>
        </div>
    )
}

export default Experience;