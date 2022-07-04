import type { NextPage } from 'next'
import Introduction from "./screens/Introduction";
import About from './screens/About';
import Navbar from './components/navbar/Navbar';
import Skills from './components/Skills';
import Projects from './Projects';
import Experience from './components/Experience';
import MobileNav from './components/navbar/MobileNav';

const Home: NextPage = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <Navbar mobile={false}/>
      </div>
      <div className='md:hidden'>
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
