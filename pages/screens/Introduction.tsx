import AnimatedText from "../components/AnimatedText";

const Introduction = () => {

    return (
        <div id="intro" className="flex w-screen min-h-screen bg-slate-700 p-8">
            <div className="m-auto border-1 rounded-md border-white p-2 text-center">
            <AnimatedText text="Hi, my name is Harrison" className="text-6xl text-slate-200 mb-6"/>
                <p className="text-slate-400 text-3xl w-2/3 mx-auto">
                    I&apos;m a recent graduated in applied mathematics and computer science from Monash University currently working at Bank of Queensland as a Data Analyst. I am looking to move into the field of software engineering.
                </p>
            </div>
        </div>
    )
}

export default Introduction;