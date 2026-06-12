import './AgentesCards.css'
import { Link } from 'react-router-dom';

function AgentesCards({ nome, funcao, imagem, id}) {

const textoAlternativo = nome 
    ? `Ilustração do agente ${nome}, da função ${funcao}` 
    : "Ilustração de um agente do Valorant";

  return (
    <div className="card">
      <Link to={`/projeto-valorant/${id}`}>
        <img src={imagem} alt={textoAlternativo} />
      

      <h3>{nome}</h3>

      <p>{funcao}</p>
      </Link>
    </div>
  )
}

export default AgentesCards