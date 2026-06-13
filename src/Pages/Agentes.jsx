import { useParams, Link, useLocation } from "react-router-dom";
import { listaAgentes } from "./Home"; 

// mesma lógica do Vite para ler as imagens da pasta assets
const imagensAgentes = import.meta.glob('/src/assets/*.png', { eager: true });

function Agentes() {
  const { id } = useParams();
  // const navigate = useNavigate();
  const location = useLocation();

  const agente = listaAgentes.find((item) => item.id === Number(id));

  // const handleVoltar = () => {
  //   if (location.key === 'default') {
  //   navigate('/projeto-valorant/', { replace: true })
  //     } else {
  //     navigate(-1);;
  //     }
  //   };
    const caminhoVoltar = location.key === 'default' ? '/projeto-valorant' : -1;

  if (!agente) {
    return (
    <>
    <main className="agenteCardMain">
      <h1>Agente não encontrado</h1>;
        {/* <button onClick={handleVoltar} className="botao-voltar">Voltar</button> */}
        <Link to="/projeto-valorant" className="botao-voltar" aria-label="Voltar para a lista de agentes">
          Voltar
        </Link>
    </main>
    </>
  );}

  const chaveImagem = `/src/assets/${agente.arquivo}`;
  const imagemResolvida = imagensAgentes[chaveImagem]?.default || '';

  return (
    <div className="container-da-pagina">
      <div className="topo-pagina">
         <Link to={caminhoVoltar} className="botao-voltar" aria-label="Voltar para a lista de agentes">
         ← Voltar para a lista
        </Link>
      </div>
      <main className="agenteCardMain">
        <h1>{agente.nome}</h1>
        <p>Função: {agente.funcao}</p>
        <img src={imagemResolvida} alt={`Ilustração do agente ${agente.nome}`} width="300"/>
      </main>
    </div>
  );
}

export default Agentes;