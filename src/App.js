import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectSlider from "./components/ProjectSlider";
import About from "./components/About";
import Contact from "./components/Contact";
import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";
import Certificates from "./components/Certificates";
import Certificates2 from "./components/Certificates2";



export default function App(){
  return(
    <>
    <Navbar />
    <About />
    <ProjectSlider />
    <Slider />
    <Certificates />
    <Certificates2 />
    <Slider2 />
    <Contact />
    <Footer />
    </>
  )
}