import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, BookOpen, History, Play, Code2, Settings2, Sparkles, ArrowRight, Brain, Calculator, Type, Gamepad2, Link as LinkIcon } from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative py-24 sm:py-28 ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-6 sm:px-8 ${className}`}>{children}</div>
);

const Badge = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15">
    {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
    {children}
  </span>
);

const GradientBG = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    {/* Soft mesh gradient */}
    <div className="absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-3xl" />
    <div className="absolute -bottom-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-sky-500/20 via-emerald-400/20 to-indigo-500/30 blur-3xl" />
  </div>
);

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
    <Container className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
          <Cpu className="h-5 w-5" />
        </div>
        <span className="text-white font-semibold tracking-tight">Computador Genérico</span>
      </div>
      <div className="hidden sm:flex items-center gap-6 text-sm">
        <a href="#conceito" className="text-white/80 hover:text-white">Conceito</a>
        <a href="#linha-do-tempo" className="text-white/80 hover:text-white">Linha do tempo</a>
        <a href="#arquitetura" className="text-white/80 hover:text-white">Arquitetura</a>
        <a href="#demo" className="text-white/80 hover:text-white">Demonstração</a>
        <a href="#curiosidades" className="text-white/80 hover:text-white">Curiosidades</a>
      </div>
      <a href="#references" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-sm text-white ring-1 ring-white/15 hover:bg-white/20">
        <BookOpen className="h-4 w-4" /> Referências
      </a>
    </Container>
  </nav>
);

const Hero = () => (
  <Section id="hero" className="pt-12">
    <GradientBG />
    <Container>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge icon={Sparkles}>Inovação & Empreendedorismo</Badge>
            <Badge icon={History}>1936 → presente</Badge>
            <Badge icon={Cpu}>Propósito Geral</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            De máquinas específicas ao <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300">computador genérico</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Uma mudança de paradigma: em vez de construir um hardware novo para cada tarefa, passamos a <strong className="text-white">programar</strong> um mesmo computador para executar qualquer função. Essa é a base dos softwares, apps e da economia digital.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-500/20 hover:from-indigo-400 hover:to-cyan-400">
              <Play className="h-5 w-5" /> Ver demonstração
            </a>
            <a href="#linha-do-tempo" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white/80 ring-1 ring-white/15 hover:text-white">
              Explorar história <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
          {/* Stylized device mock showing app switching */}
          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-800 p-3 shadow-xl">
            <div className="rounded-[1.4rem] bg-slate-900 p-4">
              <DeviceSimulator />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <FloatingStat />
          </div>
        </motion.div>
      </div>
    </Container>
  </Section>
);

const DeviceSimulator = () => {
  const [app, setApp] = useState("calc");
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-white/80">
        <div className="flex items-center gap-2 text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Programa em execução: <span className="font-medium text-white">{app === "calc" ? "Calculadora" : app === "tictactoe" ? "Jogo da Velha" : "Editor de Texto"}</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setApp("calc")} className={`rounded-lg px-2 py-1 text-xs ${app === "calc" ? "bg-white/15 text-white" : "hover:bg-white/10"}`}><Calculator className="h-4 w-4" /></button>
          <button onClick={() => setApp("tictactoe")} className={`rounded-lg px-2 py-1 text-xs ${app === "tictactoe" ? "bg-white/15 text-white" : "hover:bg-white/10"}`}><Gamepad2 className="h-4 w-4" /></button>
          <button onClick={() => setApp("text")} className={`rounded-lg px-2 py-1 text-xs ${app === "text" ? "bg-white/15 text-white" : "hover:bg-white/10"}`}><Type className="h-4 w-4" /></button>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-slate-950 p-4 text-white">
        {app === "calc" && <MiniCalculator />}
        {app === "tictactoe" && <MiniTicTacToe />}
        {app === "text" && <MiniTextEditor />}
      </div>
    </div>
  );
};

const FloatingStat = () => (
  <div className="rounded-2xl border border-white/10 bg-slate-800/90 p-4 text-white shadow-xl">
    <div className="flex items-center gap-2 text-xs text-white/70">
      <Brain className="h-4 w-4" /> Um hardware, múltiplos softwares
    </div>
    <div className="mt-2 text-2xl font-bold">Propósito Geral</div>
    <div className="text-sm text-white/70">Troque de programa em segundos — não de máquina.</div>
  </div>
);


const Conceito = () => (
  <Section id="conceito">
    <Container>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white">O que é um computador de propósito geral?</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            É um computador capaz de executar <span className="text-white font-semibold">qualquer tarefa computacional</span> desde que programado para isso. A inovação histórica foi armazenar o <em>programa</em> na mesma memória dos dados, permitindo trocar funções rapidamente sem reconectar cabos ou refazer hardware.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li className="flex gap-3"><Sparkles className="mt-1 h-5 w-5 text-cyan-300" /> Reprogramável: um único hardware, infinitos softwares.</li>
            <li className="flex gap-3"><Sparkles className="mt-1 h-5 w-5 text-cyan-300" /> Escalável: base da indústria de software, apps e nuvem.</li>
            <li className="flex gap-3"><Sparkles className="mt-1 h-5 w-5 text-cyan-300" /> Universal: fundamentado na ideia de Máquina Universal (Turing, 1936).</li>
          </ul>
        </div>
        <ConceptCard />
      </div>
    </Container>
  </Section>
);

const ConceptCard = () => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white">
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500">
        <Settings2 className="h-5 w-5" />
      </div>
      <div>
        <div className="text-lg font-semibold">Inventores & marcos</div>
        <div className="text-white/70 text-sm">Linha do tempo resumida</div>
      </div>
    </div>
    <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Item label="1936" value="Alan Turing: Máquina Universal (conceito)" />
      <Item label="1941" value="Zuse Z3: computador programável" />
      <Item label="1943" value="Colossus: criptoanálise (especializado)" />
      <Item label="1945" value="ENIAC: reprogramação física por cabos" />
      <Item label="1949" value="EDVAC/EDSAC: programa armazenado (von Neumann)" />
      <Item label="Hoje" value="Arquitetura de von Neumann em PCs e smartphones" />
    </dl>
  </div>
);

const Item = ({ label, value }) => (
  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
    <dt className="text-xs uppercase tracking-wide text-white/60">{label}</dt>
    <dd className="mt-1 text-sm text-white">{value}</dd>
  </div>
);

const LinhaDoTempo = () => {
  const events = [
    {
      year: 1936,
      title: "Máquina Universal",
      who: "Alan Turing",
      text: "Base teórica: uma máquina que pode simular qualquer outra via fita e regras.",
    },
    {
      year: 1941,
      title: "Z3",
      who: "Konrad Zuse",
      text: "Primeiro computador programável eletromecânico (fitas perfuradas).",
    },
    {
      year: 1943,
      title: "Colossus",
      who: "Tommy Flowers e equipe",
      text: "Construído para criptoanálise durante a guerra — propósito específico.",
    },
    {
      year: 1945,
      title: "ENIAC",
      who: "Eckert & Mauchly",
      text: "Reprogramação exigia recabeamento; ainda não era programa armazenado.",
    },
    {
      year: 1949,
      title: "EDVAC / EDSAC",
      who: "John von Neumann e equipes",
      text: "Arquitetura com programa armazenado — a virada para propósito geral.",
    },
    {
      year: 1951,
      title: "UNIVAC I",
      who: "Eckert & Mauchly",
      text: "Primeiro computador comercial nos EUA para usos gerais de negócios.",
    },
  ];
  return (
    <Section id="linha-do-tempo" className="bg-gradient-to-b from-slate-950 to-slate-900">
      <Container>
        <h2 className="text-3xl font-bold text-white">Linha do tempo: da teoria à indústria</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Veja como a ideia de propósito geral emerge e se consolida em poucos anos.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <motion.div key={e.year} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-slate-800/60 p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{e.year}</div>
                <Badge icon={History}>Marco</Badge>
              </div>
              <div className="mt-2 text-lg font-semibold">{e.title}</div>
              <div className="text-white/70 text-sm">{e.who}</div>
              <p className="mt-3 text-white/80 text-sm leading-relaxed">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const Arquitetura = () => (
  <Section id="arquitetura">
    <Container>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white">Arquitetura de von Neumann</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Programa e dados compartilham a mesma memória. A CPU busca instruções, executa operações e controla entradas/saídas. É a base dos computadores modernos — do notebook ao smartphone.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li className="flex gap-3"><Code2 className="mt-1 h-5 w-5 text-indigo-300" /> <span><strong>Memória</strong>: armazena dados e instruções (programa).</span></li>
            <li className="flex gap-3"><Code2 className="mt-1 h-5 w-5 text-indigo-300" /> <span><strong>CPU</strong>: Unidade de Controle + ULA (execução).</span></li>
            <li className="flex gap-3"><Code2 className="mt-1 h-5 w-5 text-indigo-300" /> <span><strong>E/S</strong>: dispositivos que conectam o mundo real (teclado, tela, rede).</span></li>
          </ul>
        </div>
        <div className="grid place-items-center">
          <ArchDiagram />
        </div>
      </div>
    </Container>
  </Section>
);

const ArchDiagram = () => (
  <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900 p-6">
    <svg viewBox="0 0 680 360" className="w-full h-auto">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="640" height="320" rx="16" fill="#0f172a" stroke="url(#g1)" opacity="0.3" />

      {/* Memory */}
      <rect x="60" y="70" width="220" height="100" rx="12" fill="#111827" stroke="#334155" />
      <text x="170" y="100" fill="#e5e7eb" textAnchor="middle" fontSize="16" fontWeight="600">Memória</text>
      <text x="170" y="126" fill="#9ca3af" textAnchor="middle" fontSize="12">Dados + Programa</text>

      {/* CPU */}
      <rect x="400" y="70" width="220" height="100" rx="12" fill="#111827" stroke="#334155" />
      <text x="510" y="100" fill="#e5e7eb" textAnchor="middle" fontSize="16" fontWeight="600">CPU</text>
      <text x="510" y="126" fill="#9ca3af" textAnchor="middle" fontSize="12">Controle + ULA</text>

      {/* I/O */}
      <rect x="230" y="220" width="220" height="90" rx="12" fill="#111827" stroke="#334155" />
      <text x="340" y="255" fill="#e5e7eb" textAnchor="middle" fontSize="16" fontWeight="600">Entrada / Saída</text>
      <text x="340" y="280" fill="#9ca3af" textAnchor="middle" fontSize="12">Teclado, Tela, Rede...</text>

      {/* Buses */}
      <line x1="280" y1="120" x2="400" y2="120" stroke="#22d3ee" strokeWidth="3" />
      <line x1="340" y1="220" x2="340" y2="170" stroke="#6366f1" strokeWidth="3" />

      <text x="340" y="115" fill="#67e8f9" textAnchor="middle" fontSize="12">Barramento de Dados/Instruções</text>
    </svg>
  </div>
);


const MiniCalculator = () => {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState(null);
  const safeEval = (raw) => {
    if (!/^[-+*/().\d\s]+$/.test(raw)) return NaN;
    try {
      const f = new Function(`return (${raw})`);
      return Number(f());
    } catch {
      return NaN;
    }
  };
  return (
    <div>
      <div className="text-sm text-white/60">Calculadora</div>
      <div className="mt-2 flex items-center gap-2">
        <input value={expr} onChange={(e) => setExpr(e.target.value)} placeholder="Ex: (2+3)*4/5" className="w-full rounded-lg bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-white/10 placeholder:text-white/40" />
        <button onClick={() => setResult(safeEval(expr))} className="rounded-lg bg-white/10 px-3 py-2 text-white ring-1 ring-white/15 hover:bg-white/20">=</button>
      </div>
      <div className="mt-3 text-lg font-semibold text-white">{result !== null ? (isNaN(Number(result)) ? "Expressão inválida" : result) : ""}</div>
    </div>
  );
};

const MiniTextEditor = () => {
  const [value, setValue] = useState("Digite seu texto aqui… \nEste é o MESMO hardware, outro software.");
  const wordCount = useMemo(() => value.trim() ? value.trim().split(/\s+/).length : 0, [value]);
  return (
    <div className="space-y-2 text-white">
      <div className="text-sm text-white/60">Editor de Texto</div>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} rows={6} className="w-full resize-none rounded-lg bg-white/5 p-3 outline-none ring-1 ring-white/10" />
      <div className="text-xs text-white/60">{wordCount} palavras</div>
    </div>
  );
};

const MiniTicTacToe = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const winner = calculateWinner(cells);
  const handle = (i) => {
    if (cells[i] || winner) return;
    const next = cells.slice();
    next[i] = xTurn ? "X" : "O";
    setCells(next);
    setXTurn(!xTurn);
  };
  const reset = () => { setCells(Array(9).fill(null)); setXTurn(true); };
  return (
    <div className="text-white">
      <div className="mb-2 text-sm text-white/60">Jogo da Velha</div>
      <div className="grid grid-cols-3 gap-2 w-48">
        {cells.map((c, i) => (
          <button key={i} onClick={() => handle(i)} className="grid h-14 w-14 place-items-center rounded-lg bg-white/5 text-2xl font-semibold ring-1 ring-white/10 hover:bg-white/10">{c}</button>
        ))}
      </div>
      <div className="mt-3 text-sm">
        {winner ? (
          <span>Vencedor: <span className="font-semibold">{winner}</span></span>
        ) : (
          <span>Vez de: <span className="font-semibold">{xTurn ? "X" : "O"}</span></span>
        )}
      </div>
      <button onClick={reset} className="mt-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs ring-1 ring-white/15 hover:bg-white/20">Reiniciar</button>
    </div>
  );
};

function calculateWinner(sq) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (const [a,b,c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
  }
  return null;
}

const Demo = () => (
  <Section id="demo" className="bg-gradient-to-b from-slate-900 to-slate-950">
    <Container>
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white">Demonstração: um hardware → múltiplos softwares</h2>
          <p className="mt-3 text-white/80">Troque entre programas para visualizar a ideia de propósito geral. O equipamento é o mesmo; a <em>função</em> muda com o software.</p>
          <ul className="mt-6 grid gap-3">
            <li className="flex items-center gap-3 text-white/80"><Calculator className="h-5 w-5 text-cyan-300" /> Calculadora</li>
            <li className="flex items-center gap-3 text-white/80"><Gamepad2 className="h-5 w-5 text-cyan-300" /> Jogo da Velha</li>
            <li className="flex items-center gap-3 text-white/80"><Type className="h-5 w-5 text-cyan-300" /> Editor de Texto</li>
          </ul>
          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-800/60 p-4">
            <DeviceSimulator />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-white">
          <h3 className="text-lg font-semibold">Como explicar em sala</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-white/80">
            <li>Mostre o mesmo "dispositivo" rodando 3 programas diferentes.</li>
            <li>Diga: antigamente, para mudar de função, era preciso <em>mudar a máquina</em>.</li>
            <li>Agora, mudamos <em>o programa</em> em memória — segundos em vez de dias.</li>
          </ol>
          <div className="mt-5 rounded-xl bg-white/5 p-4 text-sm text-white/70 ring-1 ring-white/10">
            Dica: peça para a turma sugerir um quarto programa (ex.: cronômetro) e explique que basta desenvolver outro software — o hardware permanece igual.
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

const Curiosidades = () => (
  <Section id="curiosidades">
    <Container>
      <h2 className="text-3xl font-bold text-white">Curiosidades rápidas</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "ENIAC",
            text: "Usava ~17.468 válvulas e ocupava ~167 m². Reprogramar exigia recabeamento manual.",
          },
          {
            title: "EDVAC/EDSAC",
            text: "Primeiros com programa armazenado: troque o software, mude a função.",
          },
          {
            title: "Universalidade",
            text: "A Máquina de Turing Universal mostrou que uma máquina pode simular todas as outras.",
          },
          {
            title: "Hoje",
            text: "PCs e smartphones mantêm a mesma lógica — com bilhões de transistores.",
          },
          {
            title: "Economia",
            text: "Separar hardware de software permitiu a indústria global de apps e serviços digitais.",
          },
          {
            title: "Empreendedorismo",
            text: "Produtos escaláveis: altere o software para novos mercados sem trocar o hardware base.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-white">
            <div className="text-lg font-semibold">{c.title}</div>
            <p className="mt-2 text-white/80 text-sm leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const References = () => (
  <Section id="references" className="bg-slate-950">
    <Container>
      <h2 className="text-3xl font-bold text-white">Referências essenciais</h2>
      <p className="mt-2 text-white/70">Sugestões de leitura para fundamentar a apresentação.</p>
      <ul className="mt-6 space-y-3 text-white/80">
        <li className="flex items-start gap-3"><LinkIcon className="mt-1 h-5 w-5 text-indigo-300" /> Turing, A. M. (1936). On Computable Numbers, with an Application to the Entscheidungsproblem.</li>
        <li className="flex items-start gap-3"><LinkIcon className="mt-1 h-5 w-5 text-indigo-300" /> von Neumann, J. (1945). First Draft of a Report on the EDVAC.</li>
        <li className="flex items-start gap-3"><LinkIcon className="mt-1 h-5 w-5 text-indigo-300" /> Campbell-Kelly, M. (1990). The Colossus and wartime codebreaking.</li>
        <li className="flex items-start gap-3"><LinkIcon className="mt-1 h-5 w-5 text-indigo-300" /> Ceruzzi, P. (2003). A History of Modern Computing.</li>
      </ul>
    </Container>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950">
    <Container>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-sm text-white/60">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4" />
          <span>Computador de Propósito Geral — Landing para aula</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#conceito" className="hover:text-white">Conceito</a>
          <a href="#linha-do-tempo" className="hover:text-white">Linha do tempo</a>
          <a href="#demo" className="hover:text-white">Demonstração</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default function LandingComputadorGenerico() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Conceito />
      <LinhaDoTempo />
      <Arquitetura />
      <Demo />
      <Curiosidades />
      <References />
      <Footer />
    </div>
  );
}
