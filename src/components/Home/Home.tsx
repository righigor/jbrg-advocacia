import style from './Home.module.css';

import logo from '../../assets/logomarca/logo-dark.jpeg';


function Home() {
  return (
    <div className={ style.container }>
      <img src={ logo } alt="" className={ style.logo }/>
      <p className={ style.palavras }>COMPETÊNCIA • HONESTIDADE • SEGURANÇA • COMPROMISSO E RESULTADO</p>
    </div>
  );
}

export default Home;