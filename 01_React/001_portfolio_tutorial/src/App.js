import About from './Components/About Section/About';
import Contact from './Components/Contact Section/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home Section/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects Section/Projects';
import Skills from './Components/Skills Section/Skills';
import './app.css'

function App() {
  return (

    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>


  );
}
export default App;
