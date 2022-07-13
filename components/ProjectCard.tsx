import { motion } from "framer-motion";
import Image from "next/image";
import BorderBox from "./BorderBox";

type Props = {
  title: string;
  description: string;
  hashtags: string[];
  image: string;
};

const ProjectCard: React.FC<Props> = (props) => {


  let style = {

  }
  return (
    <BorderBox>
      <div className="border w-[80vw] h-fit max-h-fit md:min-h-[60vh] md:w-[25vw] lg:w-[30vw]">
        <Image className="w-full" src={props.image} alt="Mountain" layout="responsive" width="500" height="300" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            {props.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.hashtags.map((hashtag, i) => (
            <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtag}</span>
          )
          )}
        </div>
      </div>
    </BorderBox>
  );
};

const ProjectList = () => {
  return (
    <div className="p-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-[80vw] gap-5 m-auto">

      <ProjectCard
        title={"copykitt"}
        description={"A fullstack application which generates a tagline and keywords for a branding prompt"}
        hashtags={['Typescript', 'React', 'FastAPI', 'AWS Lambda', 'Vercel', 'NextJS', 'OpenAI']}
        image={"/copykitt-preview.png"}
      />
      <ProjectCard
        title={"Todo List"}
        description={"A dynamic todo list"}
        hashtags={['Typescript', 'Context', 'React']}
        image={"/copykitt-preview.png"}
      />
    </div >
  );
};

export default ProjectList;
