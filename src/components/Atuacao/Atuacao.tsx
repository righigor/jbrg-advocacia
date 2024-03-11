import style from './Atuacao.module.css';
import AtuacaoRender from "../AtuacaoRender/AtuacaoRender";

function Atuacao() {
  return (
    <div>
      <div 
        className={ style.container }
        data-aos="fade-zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-back"
      >
        <h3 className={ style.title }>Áreas de Atuação</h3>
        <AtuacaoRender />
      </div>
    </div>
  );
}

export default Atuacao;