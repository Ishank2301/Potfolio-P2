import Navigation from "./components/Navigation";

function App() {
  return (
    <main className="site-shell" id="home">
      <Navigation />
      <section className="intro-panel" aria-labelledby="portfolio-title">
        <p className="eyebrow">AI/ML Engineer Portfolio</p>
        <h1 id="portfolio-title">Ishank Mishra</h1>
        <p className="intro-copy">
          Building production-grade AI systems across LLM orchestration, RAG,
          full stack products, and multi-agent workflows.
        </p>
      </section>
    </main>
  );
}

export default App;
