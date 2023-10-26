import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectSlider from "./components/ProjectSlider";
import About from "./components/About";
import Contact from "./components/Contact";

const projects = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 1',
    imageUrl: 'project1.jpg',
  },
  {
    title: 'Project 3',
    description: 'Description for Project 1',
    imageUrl: 'project1.jpg',
  },
  // Add more projects
];
export default function App(){
  return(
    <>
    <Navbar />
    <About />
    <ProjectSlider projects={projects} />
    <Contact />
    <Footer />
    </>
  )
}