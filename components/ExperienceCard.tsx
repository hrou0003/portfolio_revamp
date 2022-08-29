
interface IExperience {
    Title: string;
    Time: string;
    Company: string;
    Description: string;
}

const ExperienceCard: React.FC<IExperience> = (props) => {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.Time}</time>
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.Title},</h3>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> {props.Company}</h3>
            </div>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{props.Description}</p>
        </li>
    )
}



type ExperienceProps = {
    experiences: IExperience[];
}

const ExperienceList: React.FC<ExperienceProps> = ({ experiences }) => {

    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {experiences.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    Title={exp.Title}
                    Company={exp.Company}
                    Description={exp.Description}
                    Time={exp.Time}
                />
            ))}
        </ol>
    )
}




export default ExperienceList;