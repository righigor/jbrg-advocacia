import style from './HeaderNav.module.css';

import logo from '../../assets/logomarca/logo-dark.jpeg';
import wpp from '../../assets/icons/wpp-white-logo.svg';

function HeaderNav() {
  const smoothScroll = (target: string, duration: number) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    const offset = 70;
    const startPosition = window.scrollY;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;
    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scroll = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scroll);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
  }
  return (
    <header className={ style.container }>
      <a href="#inicio" onClick={ () => smoothScroll('#inicio', 1000) }>
        <img src={ logo } alt="" className={ style.logo }/>
      </a>
      <div className={ style.navContainer }>
        <a href='#about' onClick={ () => smoothScroll('#about', 1000) }>Sobre</a>
        <a href='#atuacao' onClick={ () => smoothScroll('#atuacao', 1000) }>Atuação</a>
        <a href='#equipe' onClick={ () => smoothScroll('#equipe', 1000) }>Equipe</a>
        <a href='#contato' onClick={ () => smoothScroll('#contato', 1000) }>Contato</a>
      </div>
      <div className={ style.numContainer }>
        <a href="https://api.whatsapp.com/send?phone=553135612662" target="_blank" rel="noopener noreferrer">
          <img src={ wpp } alt="" />
          <span>(31) 3561-2662</span>
        </a>
      </div>
    </header>
  );
}

export default HeaderNav;