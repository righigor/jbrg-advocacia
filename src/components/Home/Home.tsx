import style from './Home.module.css';

import logo from '../../assets/imgs/capa1.png';


function Home() {
  return (
    <div className={ style.container }>
      <img src={ logo } alt="Palácio da Justiça Rodrigues Campos - Sede histórica do Judiciário Mineiro" className={ style.logo }/>
      <h1 className={ style.palavras }>COMPETÊNCIA • HONESTIDADE • SEGURANÇA • COMPROMISSO E RESULTADO</h1>
    </div>
  );
}

export default Home;