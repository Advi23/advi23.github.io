import MenuBar from './components/MenuBar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/ProjectComponents/Projects.tsx';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <> 
      <MenuBar />
      <main className="pt-16">
        <Home />
        <Projects />
        <Experience />
        <Skills />
        <About />
      </main>
    </>
  );
}

export default App;
