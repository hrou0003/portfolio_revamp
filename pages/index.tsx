import type { NextPage } from 'next'
import Introduction from "./screens/Introduction";
import About from './screens/About';
import Navbar from './components/navbar/Navbar';
import Skills from './components/Skills';
import Projects from './Projects';
import Experience from './components/Experience';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Skills  />
      <Experience />
      <Projects />
    </div>
  )
}

export default Home
