import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BorderBox from "./Animations/BorderBox";
import CardFlip from "./Animations/CardFlip";

type Props = {
  title: string;
  description: string;
  hashtags: string[];
  image: string;
  url: string;
};

const ProjectCard: React.FC<Props> = (props) => {


  let style = {

  }
  return (
    <BorderBox>
      <CardFlip frontComponent={
      <Link href={props.url}>
      <div className="border w-[80vw] h-fit max-h-fit md:min-h-[60vh] md:w-[25vw] lg:w-[30vw]" >
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
      </Link>}
      backComponent={
      <Link href={props.url}>
      <div className="border w-[80vw]  bg-slate-300 h-fit max-h-fit md:min-h-[60vh] md:w-[25vw] lg:w-[30vw]" >
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
      </Link>}
      />
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
        url={"https://copykitt-k71udul7v-hrou0003.vercel.app/"}
      />
      <ProjectCard
        title={"Todo List"}
        description={"A dynamic todo list"}
        hashtags={['Typescript', 'Context', 'React']}
        image={"/copykitt-preview.png"}
        url={""}
      />
    </div >
  );
};

export default ProjectList;