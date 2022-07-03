import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
    jobTitle: string;
    company: string;
    location: string;
    date: string;
}

const ExperienceCard: React.FC<Props> = (props) => {
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

const ExperienceList = () => {

    return (
        <div className="p-4 m-auto max-w-lg bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Job Experience</h5>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <ExperienceCard jobTitle="Data Analyst" company="Bank of Queensland" location="Melbourne, Victoria, Australia" date="March, 2022 - Present" />
                    <ExperienceCard jobTitle="Data Analyst" company="Bank of Queensland" location="Melbourne, Victoria, Australia" date="March, 2022 - Present" />
                    <ExperienceCard jobTitle="Data Analyst" company="Bank of Queensland" location="Melbourne, Victoria, Australia" date="March, 2022 - Present" />
                </ul>
            </div>
        </div>
    )
}

export default ExperienceList;