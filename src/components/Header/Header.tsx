import { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";

import logo from '../../assets/logomarca/logo-dark.jpeg';
import style from './Header.module.css';
import HeaderDrop from "./HeaderDrop";

function Header() {
  const [widthScreen, setWidhScreen] = useState({
    largura: window.innerWidth,
  });
  const atualizarTamanhoDaTela = () => {
    setWidhScreen({
      largura: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', atualizarTamanhoDaTela);
    return () => {
      window.removeEventListener('resize', atualizarTamanhoDaTela);
    };
  }, []);

  return (
    <div className={ style.headerContainer }>
      <img src={ logo } alt="" className={ style.logo } />
      {(widthScreen.largura > 768)
        ? <HeaderNav />
        : <HeaderDrop />}
    </div>
  );
}

export default Header;