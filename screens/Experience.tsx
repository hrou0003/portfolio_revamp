import ExperienceCard from "../components/ExperienceCard";


const Experience = () => {

    return (
        <div id="experience" className="flex w-screen min-h-screen bg-gray-900 p-4">
            <div
                className="m-auto grid grid-cols-1 md:grid-cols-2 gap-20"
            >
                    <div>
                        <h1 className="text-slate-400 text-2xl mb-4">Education</h1>
                        <ExperienceCard />
                    </div>
                    <div>
                        <h1 className="text-slate-400 text-2xl mb-4">Work Experience</h1>
                        <ExperienceCard />
                    </div>
            </div>
        </div>
    )
}

export default Experience;