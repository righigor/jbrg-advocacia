import style from './Stats.module.css';

function Stats() {
  return (
    <div className={ style.container }>
      <div>
        <h4>X+</h4>
        <span>ANOS DE EXPERIÊNCIA</span>
      </div>
      <div>
        <h4>X+</h4>
        <span>CLIENTES SATISFEITOS</span>
      </div>
      <div>
        <h4>X+</h4>
        <span>PROCESSOS FINALIZADOS</span>
      </div>
    </div>
  );
}

export default Stats;