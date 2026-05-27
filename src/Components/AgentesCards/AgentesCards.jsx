import './AgentesCards.css'

function AgentesCards({ nome, funcao, imagem}) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />

      <h3>{nome}</h3>

      <p>{funcao}</p>
    </div>
  )
}

export default AgentesCards