import './AgentesCards.css'
import { Link } from 'react-router-dom';

function AgentesCards({ nome, funcao, imagem, id}) {
  return (
    <div className="card">
      <Link to={`/projeto-valorant/${id}`}>
        <img src={imagem} alt={nome} />
      </Link>

      <h3>{nome}</h3>

      <p>{funcao}</p>
    </div>
  )
}

export default AgentesCards