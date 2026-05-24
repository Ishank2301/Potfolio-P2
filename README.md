# Ishank Mishra Portfolio

Resume-tailored AI/ML engineering portfolio for agentic AI, RAG systems,
fine-tuning, computer vision, and full stack AI products.

## Highlights

- 2026-style responsive UI with glassy navigation, motion, and dense content.
- Resume-backed data layer for skills, projects, achievements, links, and stats.
- Interactive AI command deck with selectable system modes and an intensity control.
- Project showcase for MediAgent, DeepReview-AI, chat-with-pdf-rag, LLM fine-tuning,
  and DBZ-Fighter.
- Production build served by a small Express static server.

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React
- Tailwind CSS tooling
- Express
- pnpm via Corepack

## Getting Started

```bash
corepack pnpm install
corepack pnpm dev
```

The dev server runs through Vite. If port `3000` is occupied, Vite will choose
the next available port.

## Useful Scripts

```bash
corepack pnpm check
corepack pnpm build
corepack pnpm preview
corepack pnpm start
```

## Project Structure

```text
client/
  index.html
  src/
    App.tsx
    index.css
    components/
      About.tsx
      CommandDeck.tsx
      Contact.tsx
      Hero.tsx
      Navigation.tsx
      Projects.tsx
      Skills.tsx
    data/
      profile.ts
server/
  index.ts
shared/
  const.ts
```

## Resume Alignment

The content is based on Ishank Mishra's resume:

- AI/ML engineer and full stack developer from Jaipur, India.
- Focus areas: LangChain, LangGraph, CrewAI, AutoGen, OpenAI APIs, RAG, QLoRA,
  FastAPI, React, Next.js, PostgreSQL, Docker, and AWS.
- Education: B.Tech in Computer Software Engineering, 2023-2027.
- Achievements include a top 10 national hackathon finish, 85%+ RAG answer
  accuracy, 92% CV validation accuracy, and Deloitte Data Analytics simulation.

## Verification

Current checks:

```bash
corepack pnpm check
corepack pnpm build
```
