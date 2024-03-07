import { useState } from "react";
import style from './AtuacaoRender.module.css';
import { atuacao } from "../../utils/atuacao";
import plus from '../../assets/icons/plus-icon.svg';
import minus from '../../assets/icons/menos-icon.svg';

function AtuacaoRender() {
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const handleAreaClick = (title: string) => {
    setShowDetails(showDetails === title ? null : title);
  };

  return (
    <div className={ style.container }>
      { atuacao.map((item, index) => {
        return (
          <div key={ index } className={ style.itemContainer }>
            <div onClick={ () => handleAreaClick(item.title) } className={ style.title }>
              <img src={ showDetails === item.title ? minus : plus } alt="" />
              <h5>{ item.title }</h5>
            </div>
            <p className={`${style.description} ${showDetails === item.title ? style.active : ''}`}>{ item.desc }</p>
          </div>
        );
      })}
    </div>
  );
}

export default AtuacaoRender;