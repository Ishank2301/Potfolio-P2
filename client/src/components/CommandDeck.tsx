import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Activity, Bot, DatabaseZap, Gauge } from "lucide-react";

const modes = [
  { id: "agents", label: "Agents", icon: Bot, output: "LangGraph + CrewAI orchestration for specialist workers." },
  { id: "rag", label: "RAG", icon: DatabaseZap, output: "Hybrid retrieval with semantic chunks, FAISS, BM25, and re-ranking." },
  { id: "tuning", label: "Tuning", icon: Gauge, output: "QLoRA adaptation with memory-aware training loops and eval suites." },
] as const;

function CommandDeck() {
  const [mode, setMode] = useState<(typeof modes)[number]["id"]>("agents");
  const [intensity, setIntensity] = useState(68);
  const active = useMemo(() => modes.find((item) => item.id === mode) ?? modes[0], [mode]);
  const ActiveIcon = active.icon;

  return (
    <section className="command-section" aria-labelledby="command-title">
      <div className="section-heading">
        <p className="eyebrow">On-demand UI</p>
        <h2 id="command-title">Switch the AI system mode.</h2>
      </div>
      <div className="command-deck">
        <div className="mode-switcher" role="tablist" aria-label="AI system modes">
          {modes.map((item) => {
            const Icon = item.icon;
            return (
              <button
                aria-selected={mode === item.id}
                className={mode === item.id ? "is-active" : ""}
                key={item.id}
                onClick={() => setMode(item.id)}
                role="tab"
                type="button"
              >
                <Icon size={18} /> {item.label}
              </button>
            );
          })}
        </div>
        <div className="deck-output">
          <ActiveIcon size={34} />
          <p>{active.output}</p>
          <label>
            System intensity
            <input
              max="100"
              min="20"
              onChange={(event) => setIntensity(Number(event.target.value))}
              type="range"
              value={intensity}
            />
          </label>
          <div className="meter" style={{ "--meter": `${intensity}%` } as CSSProperties}>
            <span />
          </div>
          <strong>
            <Activity size={18} /> {intensity}% ready for production pressure
          </strong>
        </div>
      </div>
    </section>
  );
}

export default CommandDeck;
