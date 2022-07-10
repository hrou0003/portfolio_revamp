import type { NextPage } from 'next'
import Introduction from "./screens/Introduction";
import Navbar from '../components/Navbar/Navbar';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Experience from './screens/Experience';
import MobileNav from '../components/Navbar/MobileNav';

const Home: NextPage = () => {
  return (
    <div>
      <div className='hidden lg:block'>
        <Navbar mobile={false} />
      </div>
      <div className='lg:hidden'>
        <MobileNav />
      </div>
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
    </div>
  )
}

export default Home
