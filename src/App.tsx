import MenuBar from './components/MenuBar';
import Home from './components/Home';

function App() {
  return (
    <> 
      <MenuBar />
      <main className="main-content">
        <Home />
        <section id="experience">
          <h1>Experience</h1>
        </section>
        <section id="projects">
          <h1>Projects</h1>
        </section>
        <section id="skills">
          <h1>Skills/Certifications</h1>
        </section>
        <section id="about">
          <h1>About</h1>
        </section>
      </main>
    </>
  );
}

export default App;
