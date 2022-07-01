
type Repo = {
    name: string;
    description: string;
    clone_url: string;
    img_url: string;
}

interface Props extends Repo {

}

const GithubRepoCard: React.FC<Props> = ({ name, description, clone_url, img_url }) => {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {name}
      </h1>
      <p className="text-base font-normal my-4 text-gray-500">
        {description}
      </p>
      <a
        href={clone_url}
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};