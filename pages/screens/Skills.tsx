// import AnimatedText from "./AnimatedText";
import Skill from "../../components/Skill";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faAws, faJs, faLinux, faGolang, faGit } from "@fortawesome/free-brands-svg-icons";
import TextHighlight from "../../components/TextHighlight";

const Skills: React.FC = () => {

    const [expanded, setExpanded] = useState<false | number>(0);

    return (
        <div id="skills" className="flex w-screen min-h-screen bg-gray-600">
            <div className="h-fit m-auto space-y-4 md:w-1/2">
                <div className="text-slate-400 text-3xl mx-auto p-5 text-center">I have over <TextHighlight inView={true}>5 years</TextHighlight> of software development experience</div>
                <div className="m-auto">
                    <Skill width={0.9} i={1} expanded={expanded} setExpanded={setExpanded} label={<FontAwesomeIcon icon={faPython} fontSize="1.5rem" color="white" />} />
                    <Skill width={0.7} i={2} expanded={expanded} setExpanded={setExpanded} label={<FontAwesomeIcon icon={faJs} fontSize="1.5rem" color="white" />} />
                    <Skill width={0.55} i={3} expanded={expanded} setExpanded={setExpanded}  label={<FontAwesomeIcon icon={faAws} fontSize="1.5rem" color="white" />} />
                    <Skill width={0.6} i={4} expanded={expanded} setExpanded={setExpanded}  label={<FontAwesomeIcon icon={faGit} fontSize="1.5rem" color="white" />} />
                    <Skill width={0.85} i={5} expanded={expanded} setExpanded={setExpanded}  label={<FontAwesomeIcon icon={faLinux} fontSize="1.5rem" color="white" />} />
                    <Skill width={0.45} i={6} expanded={expanded} setExpanded={setExpanded}  label={<FontAwesomeIcon icon={faGolang} fontSize="1.5rem" color="white" />} />
                </div></div>
        </div>
    )
}

export default Skills;