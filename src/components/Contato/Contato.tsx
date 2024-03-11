import EmailContactForm from '../EmailContactForm/EmailContactForm';
import Footer from '../Footer/Footer';
import Mapa from '../Mapa/Mapa';
import style from './Contato.module.css';

function Contato() {
  return (
    <div>
      <div className={style.contato}>
        <h1>Entre em contato</h1>
        <div className={ style.contentContainer }>
          <div className={ style.leftContent }>
            <div className={ style.detalhes }>
              <div className={ style.expansao }>
                <div>Agende uma reunião presencial ou online</div>
                <div>(31) 3561 - 2662</div>
              </div>
              <div className={ style.divisoria } />
              <div className={ style.expansao } >
                <div>Endereço</div>
                <div />
                <div>Av. Queiroz Junior, 77 - Sala 203, Centro, Itabirito, MG</div>
              </div>
            </div>
            <div className={ style.mapa }>
              <Mapa />
            </div>
          </div>
          <div className={ style.formContainer }>
            <EmailContactForm />
          </div>
        </div>
      </div>
      <div className={ style.footer }>
        <Footer />
      </div>
    </div>
  );
}

export default Contato;