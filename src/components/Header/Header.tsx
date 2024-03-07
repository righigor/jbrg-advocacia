import style from './Header.module.css';
import logo from '../../assets/logomarca/logo-dark.jpeg';
import wpp from '../../assets/icons/wpp-white-logo.svg';

function Header() {
  return (
    <header className={ style.container }>
      <img src={ logo } alt="" className={ style.logo }/>
      <div className={ style.navContainer }>
        <span>Sobre</span>
        <span>Atuação</span>
        <span>Equipe</span>
        <span>Contato</span>
      </div>
      <div className={ style.numContainer }>
        <img src={ wpp } alt="" />
        <span>(31) 3561 - 2662</span>
      </div>
    </header>
  );
}

export default Header;