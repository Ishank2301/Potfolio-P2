import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CommandDeck from "./components/CommandDeck";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="site-shell">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CommandDeck />
      <Contact />
    </main>
  );
}

export default App;
