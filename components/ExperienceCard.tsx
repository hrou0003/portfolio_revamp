import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
    jobTitle: string;
    company: string;
    location: string;
    description: string;
    date: string;
}

const ExperienceCard: React.FC<Props> = (props) => {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.date}</time>
            <div className="flex">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.jobTitle},  </h3>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.company}</h3>
            </div>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{props.location}</p>
        </li>
    )
}

const ExperienceList = () => {

    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <ExperienceCard
                jobTitle="Data Analyst"
                company="Bank of Queensland"
                location="Melbourne, Australia"
                description="aasdfsfd asdflj"
                date="March, 2022 - Present"
            />
            <ExperienceCard
                jobTitle="Data Analyst"
                company="Bank of Queensland"
                location="Melbourne, Australia"
                description="aasdfsfd asdflj"
                date="March, 2022 - Present"
            />
            <ExperienceCard
                jobTitle="Data Analyst"
                company="Bank of Queensland"
                location="Melbourne, Australia"
                description="aasdfsfd asdflj"
                date="March, 2022 - Present"
            />
        </ol>
    )
}




export default ExperienceList;