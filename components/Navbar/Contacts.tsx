import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
  return (
      <li>
          <a href="www.github.com/hrou0003" className='opacity-50 hover:opacity-100'><FontAwesomeIcon icon={faGithub} fontSize="1rem" color='gray'/></a>
          <a href="www.github.com/hrou0003" className='opacity-50 hover:opacity-100'><FontAwesomeIcon icon={faGithub} fontSize="1rem" color='gray'/></a>
          <a href="www.github.com/hrou0003" className='opacity-50 hover:opacity-100'><FontAwesomeIcon icon={faGithub} fontSize="1rem" color='gray'/></a>
      </li>
  );
};

export default Contacts;
