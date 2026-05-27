import { useState } from 'react'
import './App.css'
import AgentesCards from './Components/AgentesCards/AgentesCards'

// Varre a pasta assets usando a raiz '/src/' fixa, evitando confusão de pastas relativas
const imagensAgentes = import.meta.glob('/src/assets/*.png', { eager: true });

function App() {
  const [listaAgentes] = useState([
    { nome: "Astra", funcao: "Controlador", arquivo: "astra.png" },
    { nome: "Breach", funcao: "Iniciador", arquivo: "breach.png" },
    { nome: "Brimstone", funcao: "Controlador", arquivo: "brimstone.png" },
    { nome: "Chamber", funcao: "Sentinela", arquivo: "chamber.png" },
    { nome: "Clove", funcao: "Controlador", arquivo: "clove.png" },
    { nome: "Cypher", funcao: "Sentinela", arquivo: "cypher.png" },
    { nome: "Deadlock", funcao: "Sentinela", arquivo: "deadlock.png" },
    { nome: "Fade", funcao: "Iniciador", arquivo: "fade.png" },
    { nome: "Geeko", funcao: "Iniciador", arquivo: "geeko.png" },
    { nome: "Harbor", funcao: "Controlador", arquivo: "harbor.png" },
    { nome: "Iso", funcao: "Duelista", arquivo: "iso.png" },
    { nome: "Jett", funcao: "Duelista", arquivo: "jett.png" },
    { nome: "Kay/o", funcao: "Iniciador", arquivo: "kayo.png" },
    { nome: "Killjoy", funcao: "Sentinela", arquivo: "killjoy.png" },
    { nome: "Miks", funcao: "Controlador", arquivo: "miks.png" },
    { nome: "Neon", funcao: "Duelista", arquivo: "neon.png" },
    { nome: "Omen", funcao: "Controlador", arquivo: "omen.png" },
    { nome: "Phoenix", funcao: "Duelista", arquivo: "phoenix.png" },
    { nome: "Raze", funcao: "Duelista", arquivo: "raze.png" },
    { nome: "Reyna", funcao: "Duelista", arquivo: "reyna.png" },
    { nome: "Sage", funcao: "Sentinela", arquivo: "sage.png" },
    { nome: "Skye", funcao: "Iniciador", arquivo: "skye.png" },
    { nome: "Sova", funcao: "Iniciador", arquivo: "sova.png" },
    { nome: "Tejo", funcao: "Iniciador", arquivo: "tejo.png" },
    { nome: "Veto", funcao: "Sentinela", arquivo: "veto.png" },
    { nome: "Viper", funcao: "Controlador", arquivo: "viper.png" },
    { nome: "Vyse", funcao: "Sentinela", arquivo: "vyse.png" },
    { nome: "Waylay", funcao: "Duelista", arquivo: "waylay.png" },
    { nome: "Yoru", funcao: "Duelista", arquivo: "yoru.png" },
  ])

  const [funcaoSelecionada, setFuncaoSelecionada] = useState("Todos")

  const agentesFiltrados =
    funcaoSelecionada === "Todos"
      ? listaAgentes
      : listaAgentes.filter(
          (agente) => agente.funcao === funcaoSelecionada
        )

  return (
    <>
      <h1>Agentes Valorant</h1>

      <h2>
        Quantidade: {agentesFiltrados.length}
      </h2>

      <div>
        <button className="btn" onClick={() => setFuncaoSelecionada("Todos")}>
          Todos
        </button>
        <button className="btn" onClick={() => setFuncaoSelecionada("Duelista")}>
          Duelistas
        </button>
        <button className="btn" onClick={() => setFuncaoSelecionada("Controlador")}>
          Controladores
        </button>
        <button className="btn" onClick={() => setFuncaoSelecionada("Sentinela")}>
          Sentinelas
        </button>
        <button className="btn" onClick={() => setFuncaoSelecionada("Iniciador")}>
          Iniciadores
        </button>
      </div>

      <section id="center">
        {
          agentesFiltrados.map((agente, index) => {
            // Busca usando o padrão exato da linha 6
            const chaveImagem = `/src/assets/${agente.arquivo}`;
            const imagemResolvida = imagensAgentes[chaveImagem]?.default || '';

            return (
              <AgentesCards
                key={index}
                nome={agente.nome}
                funcao={agente.funcao}
                imagem={imagemResolvida}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default App
