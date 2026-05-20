import MenuBar from './components/MenuBar';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <> 
      <MenuBar />
      <main className="pt-16">
        <Home />
        <section id="experience" className="p-10">
          <h1>Experience</h1>
        </section>
        <Projects />
        <section id="skills" className="p-10">
          <h1>Skills/Certifications</h1>
        </section>
        <section id="about" className="p-10">
          <h1>About</h1>
        </section>
      </main>
    </>
  );
}

export default App;
