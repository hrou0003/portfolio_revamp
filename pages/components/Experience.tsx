import ExperienceCard from "./ExperienceCard/ExperienceCard";


const Experience = () => {

    return (
        <div id="experience" className="flex w-screen min-h-screen bg-gray-900 p-4">
            <div
                className="m-auto inline md:space-x-2"
            >
                <>
                    <div className="md:float-left">

                        <ExperienceCard />
                    </div>
                    <div className="w-2 h-2 md:float-left"></div>
                    <div className="md:float-left">
                        <ExperienceCard />
                    </div>
                </>
            </div>
        </div>
    )
}

export default Experience;