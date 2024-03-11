import style from './Equipe.module.css';

import equipe from '../../assets/imgs/equipe.svg';

function Equipe() {
    return (
        <div className={style.equipe}
        >
          <div
          >
            <div className={ style.container }>
              <h3 className={ style.title }>Conheça nossa Equipe</h3>
              <div className={ style.time }>
                <img src={ equipe } alt="" className={style.img} />
                <div>
                  <div className={ style.member }>João Batista dos Reis Gonçalves</div>
                  <div className={ style.funcao }>Advogado Titular</div>
                  <div className={ style.member }>Adenir De Paulo Machado</div>
                  <div className={ style.funcao }>Advogado Associado</div>
                  <div className={ style.member }>Cleidiane Vaz de Carvalho</div>
                  <div className={ style.funcao }>Secretária</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={ style.container }>
              <h3 className={ style.title }>Nossos Parceiros</h3>
              <div className={ style.parceiros }>
                <div className={ style.parceiro }>
                  <img src="https://www.jasa.adv.br/wp-content/uploads/2021/10/JAS000121_Marca_JASA_2021_RGB_2767-C-1024x387.png" alt="" className={ style.imgP } />
                  <div className={ style.member }>RITA</div>
                  <div className={ style.desc }>Direito do Trânsito</div>
                </div>
                <div className={ style.parceiro }>
                <img src="https://www.jasa.adv.br/wp-content/uploads/2021/10/JAS000121_Marca_JASA_2021_RGB_2767-C-1024x387.png" alt="" className={ style.imgP } />
                  <div className={ style.member }>ELAINE</div>
                  <div className={ style.desc }>Direito do Trânsito e Direito da Saúde</div>
                </div>
                <div className={ style.parceiro }>
                  <img src="https://www.jasa.adv.br/wp-content/uploads/2021/10/JAS000121_Marca_JASA_2021_RGB_2767-C-1024x387.png" alt="" className={ style.imgP } />
                  <div className={ style.member }>JASA Advocacia</div>
                  <div className={ style.desc }>Direito Empresarial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Equipe;