import style from './Atuacao.module.css';
import AtuacaoRender from "../AtuacaoRender/AtuacaoRender";

function Atuacao() {
  return (
    <div className={ style.container }>
      <h3 className={ style.title }>Áreas de Atuação</h3>
      <AtuacaoRender />
    </div>
  );
}

export default Atuacao;