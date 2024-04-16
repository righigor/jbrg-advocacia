import { useState } from 'react';
import style from './Alert.module.css';
import alertImg from '../../assets/imgs/golpe-alert.jpg';


function Alert() {
  const [exibirPopup, setExibirPopup] = useState(true);

  const fecharPopup = () => {
    setExibirPopup(false);
  };

  return (
    <>
      {exibirPopup && (
        <div className={ style.popup }>
          <img src={ alertImg } alt="Alerta de Golpe"/>
          <span className={ style.close } onClick={fecharPopup}>&times;</span>
        </div>
      )}
    </>
  );
}

export default Alert;