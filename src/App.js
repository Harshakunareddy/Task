import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectSlider from "./components/ProjectSlider";
import About from "./components/About";
import Contact from "./components/Contact";



// const projects = [
//   {
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     imageUrl: require('./1.jpg').default,
//   },
//   {
//     title: 'Project 2',
//     description: 'Description for Project 2',
//     imageUrl: require('./2.jpg').default,
//   },
//   {
//     title: 'Project 3',
//     description: 'Description for Project 3',
//     imageUrl: require('./3.jpg').default,
//   },
//   // Add more projects
// ];

export default function App(){
  return(
    <>
    <Navbar />
    <About />
    <ProjectSlider />
    <Contact />
    <Footer />
    </>
  )
}