import ExperienceCard from "../../components/ExperienceCard";
import { JobExperience, Education } from "../../components/Experience";
import TextHighlight from "../../components/TextHighlight";
import FadeIn from "../../components/FadeIn";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex w-screen min-h-screen bg-gray-900 p-12"
    >
      <FadeIn className="m-auto max-w-[60vw] grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <>
        <div>
          <h1 className="text-slate-400 text-2xl pb-2">
            <TextHighlight inView={true}>Work Experience</TextHighlight>
          </h1>
          <ExperienceCard experiences={JobExperience} />
        </div>
        <div>
          <h1 className="text-slate-400 text-2xl pb-2">
            <TextHighlight inView={true}>Education</TextHighlight>
          </h1>
          <ExperienceCard experiences={Education} />
        </div>
        </>
      </FadeIn>
    </div>
  );
};

export default Experience;
