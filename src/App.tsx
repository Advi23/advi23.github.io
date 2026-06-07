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
      <footer className="text-center py-6 text-[#422308] font-['Instrument_Serif'] text-md">
        © {new Date().getFullYear()} Advika Rapolu
      </footer>
    </>
  );
}

export default App;
