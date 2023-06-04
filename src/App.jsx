import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
// import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Project /> */}
      <Contact />
    </div>
  );
};
export default App;
