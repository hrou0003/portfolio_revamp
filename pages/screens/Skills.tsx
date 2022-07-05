// import AnimatedText from "./AnimatedText";
import Skill from "../components/Skill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faAws, faJs, faLinux } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {

    return (
        <div id="skills" className="flex w-screen min-h-screen bg-gray-600">
            <div className="h-fit m-auto space-y-4 md:w-1/2">
                <div className="text-slate-400 text-3xl mx-auto p-5 text-center">I have over 5 years of software development experience</div>
                <div className="m-auto">
                    <Skill width={0.9} label={<FontAwesomeIcon icon={faPython} fontSize="1.5rem" color="white" />} />
                    <Skill width={0.7} label={<FontAwesomeIcon icon={faJs} fontSize="1.5rem" color="white" />} />
                    <Skill width={0.6} label={<FontAwesomeIcon icon={faAws} fontSize="1.5rem" color="white" />} />
                    <Skill width={0.6} label={<FontAwesomeIcon icon={faAws} fontSize="1.5rem" color="white" />} />
                    <Skill width={0.85} label={<FontAwesomeIcon icon={faLinux} fontSize="1.5rem" color="white" />} />
                </div></div>
        </div>
    )
}

export default Skills;