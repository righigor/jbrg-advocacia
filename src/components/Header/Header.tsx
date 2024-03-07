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
        <a href="https://api.whatsapp.com/send?phone=553135612662" target="_blank" rel="noopener noreferrer">
          <span>(31) 3561 - 2662</span>
        </a>
      </div>
    </header>
  );
}

export default Header;