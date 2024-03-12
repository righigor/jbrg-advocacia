import { useState } from 'react';
import style from './HeaderDrop.module.css';

import hamMenu from '../../assets/icons/hamburguer-menu.svg';
import closeMenu from '../../assets/icons/close-menu.svg';

function HeaderDrop() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenuLink = () => {
    setIsOpen(false);
  };

  const smoothScroll = (target: string, duration: number) => {
    closeMenuLink();
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    const offset = 80;
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
    <div>
      <div>
        <button
          onClick={ () => setIsOpen(!isOpen) }
          className={ `${style.menuBtn} ${isOpen ? style.open : ''}` }
        >
          { }
          <img src={ isOpen ? '' : hamMenu } alt="Botão para abrir o Menu Mobile" />
        </button>
      </div>

      <div className={ `${style.menuContent} ${isOpen ? style.open : style.close}` }>
        <div className={ style.menuContainer }>
          <button
            onClick={ () => setIsOpen(!isOpen) }
            className={ style.closeBtn }
          >
            { }
            <img src={ closeMenu } alt="Botão para fechar o Menu Mobile" />
          </button>
          <div className={ style.linkContainer }>
            <a 
              className={ style.linkStyle }
              href='#inicio'
              onClick={ () => smoothScroll('#inicio', 1000) }
            >
              <span>Início</span>
            </a>
            <div className={ style.linkbottom } />
            <a
              className={ style.linkStyle } 
              href='#about'
              onClick={ () => smoothScroll('#about', 1000) }
            >
              <span>Sobre</span>
            </a>
            <div className={ style.linkbottom } />
            <a 
              className={ style.linkStyle }
              href='#atuacao'
              onClick={ () => smoothScroll('#atuacao', 1000) }
            >
              <span>Atuação</span>
            </a>
            <div className={ style.linkbottom } />
            <a
              className={ style.linkStyle }
              href='#equipe'
              onClick={ () => smoothScroll('#equipe', 1000) }
            >
              <span>Equipe</span>
            </a>
            <div className={ style.linkbottom } />
            <a
              className={ style.linkStyle }
              href='#contato'
              onClick={ () => smoothScroll('#contato', 1000) }
            >
              <span>Contato</span>
            </a>
            <div className={ style.linkbottom } />
            <div className={ style.numContainer }>
              <a href="https://api.whatsapp.com/send?phone=553135612662" target="_blank" rel="noopener noreferrer">
                <span>(31) 3561-2662</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDrop;