import style from './Footer.module.css';

import logo from '../../assets/logomarca/logo-dark.jpeg';
import insta from '../../assets/icons/insta.svg';
import wpp from '../../assets/icons/wpp-white-logo.svg';
import email from '../../assets/icons/email-icon.svg';
import linkedin from '../../assets/icons/linkedin-white-logo.svg';

function Footer() {
  return (
    <div>
      <div className={ style.container }>
        <img src={ logo } alt="" className={ style.logo } />
        <div className={ style.logoContainer }>
          <a href="https://www.instagram.com/joaobatista_adv1/" target="_blank" rel="noopener noreferrer">
            <img src={ insta } alt="" />
          </a>

          <a href="https://api.whatsapp.com/send?phone=553135612662" target="_blank" rel="noopener noreferrer">
            <img src={ wpp } alt="" />
          </a>

          <a href="mailto:jbrgadvogados@yahoo.com.br">
            <img src={ email } alt="" />
          </a>

          <a href="https://www.linkedin.com/in/jo%C3%A3o-batista-dos-reis-gon%C3%A7alves-723540a7/" target="_blank" rel="noopener noreferrer">
            <img src={ linkedin } alt="" />
          </a>
        </div>

        <div className={ style.contactContainer }>
          <div>jbrgadvogados@yahoo.com.br</div>
          <div>(31) 3561 - 2662</div>
          <div>Ligue ou WhatsApp</div>
        </div>
      </div>
      <div className={ style.direitos }>
        ©Todos direitos reservados.
      </div>
    </div>
  )
}

export default Footer;