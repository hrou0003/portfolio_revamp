import { motion } from "framer-motion";
import Image from "next/image";
<<<<<<< Updated upstream
=======
import Link from "next/link";
import BorderBox from "./BorderBox";
import Tabbed from "./Tabbed";
>>>>>>> Stashed changes

type Props = {
    jobTitle: string;
    company: string;
    location: string;
    date: string;
}

const ProjectCard: React.FC<Props> = (props) => {
<<<<<<< Updated upstream
    return (
        <motion.li whileHover={{ scale: 1.1 }} className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    {/* <Image layout='fill' className="w-8 h-8 rounded-full" src="https://media-exp2.licdn.com/dms/image/C560BAQH1Z5EwGQt87A/company-logo_100_100/0/1627856787021?e=1665014400&v=beta&t=b2vTXrvLE1URyCbmPMRCuTgKJChIY-qPnyfNawvy5jc" alt="Neil image" /> */}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {props.jobTitle}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {props.company}
                    </p>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {props.location}
                    </div>
                </div>

            </div>
            <div className="text-white">
                Took of visualisation and reporting did lots of other things
            </div>
        </motion.li>
    )
}
=======


  let style = {

  }
  return (
    <BorderBox
      about={<div className="border w-[80vw] h-fit max-h-fit md:min-h-[60vh] md:w-[25vw] lg:w-[30vw]" >
        <Image className="w-full" src={props.image} alt="Mountain" layout="responsive" width="500" height="300" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            {props.description}
            this is the about section
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.hashtags.map((hashtag, i) => (
            <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtag}</span>
          )
          )}
        </div>
      </div>}
      code={<div className="border w-[80vw] h-fit max-h-fit md:min-h-[60vh] md:w-[25vw] lg:w-[30vw]" >
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
      </div>}/>
  );
};
>>>>>>> Stashed changes

const ProjectList = () => {

<<<<<<< Updated upstream
    return (
        <div className="p-4 m-auto max-w-lg bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Job Experience</h5>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <ProjectCard jobTitle="Data Analyst" company="Bank of Queensland" location="Melbourne, Victoria, Australia" date="March, 2022 - Present" />
                    <ProjectCard jobTitle="Data Analyst" company="Bank of Queensland" location="Melbourne, Victoria, Australia" date="March, 2022 - Present" />
                    <ProjectCard jobTitle="Data Analyst" company="Bank of Queensland" location="Melbourne, Victoria, Australia" date="March, 2022 - Present" />
                </ul>
            </div>
        </div>
    )
}
=======
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
      <Tabbed />
    </div >
  );
};
>>>>>>> Stashed changes

export default ProjectList;