import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  jobTitle: string;
  company: string;
  location: string;
  date: string;
};

const ProjectCard: React.FC<Props> = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-sm image-lg hover:image-xl ">
      <figure>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div>
      <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row">
        <ProjectCard
          jobTitle="Data Analyst"
          company="Bank of Queensland"
          location="Melbourne, Victoria, Australia"
          date="March, 2022 - Present"
        />
        <ProjectCard
          jobTitle="Data Analyst"
          company="Bank of Queensland"
          location="Melbourne, Victoria, Australia"
          date="March, 2022 - Present"
        />
        <ProjectCard
          jobTitle="Data Analyst"
          company="Bank of Queensland"
          location="Melbourne, Victoria, Australia"
          date="March, 2022 - Present"
        />
      </ul>
    </div>
  );
};

export default ProjectList;
