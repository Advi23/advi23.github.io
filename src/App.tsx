import MenuBar from './components/MenuBar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <> 
      <MenuBar />
      <main className="pt-16">
        <Home />
        <Projects />
        <Experience />
        <Skills />
        <section id="about" className="p-10">
          <h1>About</h1>
        </section>
      </main>
    </>
  );
}

export default App;
