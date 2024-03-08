import { useState } from 'react';
import style from './HeaderDrop.module.css';

import hamMenu from '../../assets/icons/hamburguer-menu.svg';
import closeMenu from '../../assets/icons/close-menu.svg';

function HeaderDrop() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenuLink = () => {
    setIsOpen(false);
  };

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
            <a className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Início</span>
            </a>
            <div className={ style.linkbottom } />
            <a className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Sobre</span>
            </a>
            <div className={ style.linkbottom } />
            <a className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Atuação</span>
            </a>
            <div className={ style.linkbottom } />
            <a className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Equipe</span>
            </a>
            <div className={ style.linkbottom } />
            <a className={ style.linkStyle } onClick={ closeMenuLink }>
              <span>Contato</span>
            </a>
            <div className={ style.linkbottom } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDrop;