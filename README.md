# Premium AI Systems Engineering Portfolio 🚀

A high-performance, modern portfolio website showcasing production-grade Generative AI systems, event-driven backend architectures, and intelligent workflow automation built for scalable engineering impact.

Designed with rich aesthetics, sleek glassmorphism, responsive grids, custom-engineered SVG tech logos, and immersive scroll-based interactions.

---

## 🎨 Live Preview & Aesthetics

* **Dynamic Particles Background:** High-fidelity canvas connection graph showing real-time interactive nodes.
* **Modern Typography & Sleek Styling:** Harmony of neon accents (`cyan`, `violet`, `green`), radial glows, and elegant dark-mode glassmorphic cards.
* **Infinite Logo Marquee:** A customized hardware-accelerated carousel displaying a rich tech stack that pauses smoothly on cursor hover.
* **Interactive Active-Learning Showcase:** A 3x2 interactive grid highlighting bleeding-edge research directions (AI Agents, MCP, Observability, Multi-Agent Swarms, etc.) with custom hover states and neon glow halos.

---

## 🏗️ Highlighted Systems & Projects

### 🛡️ [SentinelAI](https://github.com/Anubhav2808GIT/sentinel-ai) (Flagship)
**Real-Time Incident Intelligence & Observability Platform**
* **Core Stack:** Python, FastAPI, Apache Kafka, Redis, Docker, PostgreSQL, WebSockets, Machine Learning.
* **Architecture:** Event-driven microservices architecture utilizing Kafka streams for telemetry ingestion, an AI-driven incident correlation engine, and low-latency Redis caching to surface critical server anomalies in real time.
* **Key Features:** WebSocket-powered telemetry dashboard, custom threshold policies, sub-millisecond alerting.

### 📊 [Cvantra-AI](https://github.com/Anubhav2808GIT/CVantra_AI)
**Resume Intelligence & GenAI Analysis Platform**
* **Core Stack:** FastAPI, Ollama (Local LLM), React, TypeScript, SQLite, Recharts, RAG.
* **Architecture:** Fully private candidate-intelligence system that reads, parses, and scores resume alignment against descriptions using local offline LLM inference via Ollama.
* **Key Features:** Recruiter-style resume-to-JD gap analysis, automatic 4-week upskilling roadmap generation,SQLite persistency.

### 🤖 [AI Job Hunter Assistant](https://github.com/Anubhav2808GIT/ai-job-hunter-assistant)
**Intelligent Job Automation & Orchestration Workflow**
* **Core Stack:** n8n, Ollama (Local LLM), Google Sheets API, Telegram Bot API, Python, SQL.
* **Architecture:** Scheduled multi-source job harvesting pipeline orchestrated end-to-end on n8n, filtering listings using hash-based deduplication and scoring them through local LLMs.
* **Key Features:** Automatic personalized cover letter generation, instant Telegram notification alerts, sync to cloud databases.

---

## 🛠️ The Hands-on Tech Stack

* **AI & Orchestration:** LangChain, Ollama (Local LLMs), RAG pipelines, n8n, Vector Databases (Chroma/pgvector).
* **Backend Systems:** FastAPI, Python, Apache Kafka, Redis, PostgreSQL, SQLite, REST & SOAP APIs, WebSockets.
* **Frontend Experience:** React, Vite, TailwindCSS, Lucide Icons, Canvas API, Recharts, React Intersection Observer.
* **DevOps & Infrastructure:** Docker containerization, Git CI/CD pipelines, secure local environment config management.

---

## 🚀 Local Setup & Installation

### Prerequisites
* Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended)
* A package manager like `npm` (packaged with Node)

### 1. Clone the Repository
```bash
git clone https://github.com/Anubhav2808GIT/anubhav-portfolio.git
cd anubhav-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory to support contact form submissions:
```env
# Web3Forms access key for inbox delivery (obtain free key at https://web3forms.com)
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 4. Run Locally (Development Server)
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module reloading (HMR).

### 5. Build for Production
```bash
npm run build
```
The optimized bundle will be compiled inside the `/dist` directory, ready to be deployed on static hosting providers (Vercel, Netlify, GitHub Pages, etc.).

---

## 🔒 Security & Best Practices
* **Zero Secret Leakage:** Local credentials, keys, and environment overrides are strictly isolated from the repository using advanced `.gitignore` patterns.
* **Performance-First Assets:** High-performance SVG layouts rather than heavy raster icons ensure standard Google PageSpeed scores remain above 95.
* **Lightweight Bundle:** Fast load speeds on slow networks by stripping large libraries and managing custom micro-animations natively in Tailwind configurations and raw CSS keyframes.

---

## 📄 License
This project is licensed under the MIT License. Feel free to use and adapt this system portfolio for your personal showcases.
