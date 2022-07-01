import type { NextPage } from 'next'
import Introduction from "./screens/Introduction";
import About from './screens/About';
import Navbar from './components/navbar/Navbar';
import Experience from './components/Experience';
import Projects from './Projects';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Experience />
      <About />
      <Projects />
    </div>
  )
}

export default Home
