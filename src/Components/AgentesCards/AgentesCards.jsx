import './AgentesCards.css'
import { Link } from 'react-router-dom';

function AgentesCards({ nome, funcao, imagem, id}) {

const textoAlternativo = nome 
    ? `Ilustração do agente ${nome}, da função ${funcao}` 
    : "Ilustração de um agente do Valorant";



    const registrarClick = (destino) =>{
      console.log('Evento de clique enviado, destino:', destino)

      window.dataLayer.push({
        event: "click",
        destino: destino,
      })
    }

  return (
    <div className="card">
      <Link to={`/projeto-valorant/${id}`} onClick={() => resgitrarClick(nome)}>
        <img src={imagem} alt={textoAlternativo} />
      

      <h3>{nome}</h3>

      <p>{funcao}</p>
      </Link>
    </div>
  )
}

export default AgentesCards