import { useState } from 'react'
import AgentesCards from '../Components/AgentesCards/AgentesCards'

const imagensAgentes = import.meta.glob('/src/assets/*.png', { eager: true });

// 1. IMPORTANTE: Tiramos o array do useState e exportamos ele aqui fora
export const listaAgentes = [
  {id:1, nome: "Astra", funcao: "Controlador", arquivo: "astra.png" },
  {id:2, nome: "Breach", funcao: "Iniciador", arquivo: "breach.png" },
  {id:3, nome: "Brimstone", funcao: "Controlador", arquivo: "brimstone.png" },
  {id:4, nome: "Chamber", funcao: "Sentinela", arquivo: "chamber.png" },
  {id:5, nome: "Clove", funcao: "Controlador", arquivo: "clove.png" },
  {id:6, nome: "Cypher", funcao: "Sentinela", arquivo: "cypher.png" },
  {id:7, nome: "Deadlock", funcao: "Sentinela", arquivo: "deadlock.png" },
  {id:8, nome: "Fade", funcao: "Iniciador", arquivo: "fade.png" },
  {id:9, nome: "Geeko", funcao: "Iniciador", arquivo: "geeko.png" },
  {id:10, nome: "Harbor", funcao: "Controlador", arquivo: "harbor.png" },
  {id:11, nome: "Iso", funcao: "Duelista", arquivo: "iso.png" },
  {id:12, nome: "Jett", funcao: "Duelista", arquivo: "jett.png" },
  {id:13, nome: "Kay/o", funcao: "Iniciador", arquivo: "kayo.png" },
  {id:14, nome: "Killjoy", funcao: "Sentinela", arquivo: "killjoy.png" },
  {id:15, nome: "Miks", funcao: "Controlador", arquivo: "miks.png" },
  {id:16, nome: "Neon", funcao: "Duelista", arquivo: "neon.png" },
  {id:17, nome: "Omen", funcao: "Controlador", arquivo: "omen.png" },
  {id:18, nome: "Phoenix", funcao: "Duelista", arquivo: "phoenix.png" },
  {id:19, nome: "Raze", funcao: "Duelista", arquivo: "raze.png" },
  {id:20, nome: "Reyna", funcao: "Duelista", arquivo: "reyna.png" },
  {id:21, nome: "Sage", funcao: "Sentinela", arquivo: "sage.png" },
  {id:22, nome: "Skye", funcao: "Iniciador", arquivo: "skye.png" },
  {id:23, nome: "Sova", funcao: "Iniciador", arquivo: "sova.png" },
  {id:24, nome: "Tejo", funcao: "Iniciador", arquivo: "tejo.png" },
  {id:25, nome: "Veto", funcao: "Sentinela", arquivo: "veto.png" },
  {id:26, nome: "Viper", funcao: "Controlador", arquivo: "viper.png" },
  {id:27, nome: "Vyse", funcao: "Sentinela", arquivo: "vyse.png" },
  {id:28, nome: "Waylay", funcao: "Duelista", arquivo: "waylay.png" },
  {id:29, nome: "Yoru", funcao: "Duelista", arquivo: "yoru.png" },
];

function Home (){
  // O seu estado agora só precisa saber qual função está selecionada
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

      <h2>Quantidade: {agentesFiltrados.length}</h2>

      <div>
        <button className="btn" onClick={() => setFuncaoSelecionada("Todos")}>Todos</button>
        <button className="btn" onClick={() => setFuncaoSelecionada("Duelista")}>Duelistas</button>
        <button className="btn" onClick={() => setFuncaoSelecionada("Controlador")}>Controladores</button>
        <button className="btn" onClick={() => setFuncaoSelecionada("Sentinela")}>Sentinelas</button>
        <button className="btn" onClick={() => setFuncaoSelecionada("Iniciador")}>Iniciadores</button>
      </div>

      <section id="center">
        {
          agentesFiltrados.map((agente, index) => {
            const chaveImagem = `/src/assets/${agente.arquivo}`;
            const imagemResolvida = imagensAgentes[chaveImagem]?.default || '';

            return (
              <AgentesCards
                key={index}
                nome={agente.nome}
                id={agente.id}
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

export default Home;