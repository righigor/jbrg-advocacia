import style from './About.module.css';

import perfil from '../../assets/imgs/perfil.jpg';
import logo from '../../assets/logomarca/logo-mini-white.jpeg';

function About() {
  return (
    <div 
      data-aos="fade-zoom-in"
      data-aos-duration="500"
      data-aos-easing="ease-in-back"
    >
      <div className={ style.container }>
        <img src={ perfil } alt="" className={ style.perfil }/>
        <div className={ style.aboutContainer }>
          <h2>Sobre</h2>
          {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In porro consequuntur eligendi, libero facere similique quasi doloribus corporis delectus nemo maiores ad assumenda quas autem non nobis velit. Dolore, asperiores.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati modi voluptatem, quae ex cum adipisci numquam corrupti alias reprehenderit cumque voluptas quia inventore error ipsam quasi dignissimos perspiciatis doloribus!</p> */}
          <p>A JBRG ADVOCACIA é um empresa jurídica, presente no mercado há vinte e oito anos, oferecendo serviços de conteúdo jurídico com ética e responsabilidade, disponibilizando uma equipe técnica capaz, preservando de forma intransigente valores como ética, compromisso, honestidade e competência, visando oferecer segurança jurídica e uma defesa implacável em favor dos interesses do cliente.</p>
          <p>Nossa principal característica é o foco no resultado ou solução, utilizando as melhores ferramentas, compatibilizando conciliação e mediação, quanto possível, com o exercício da advocacia de forma independente, embora leal para com o nosso cliente, exercendo a defesa com persistência e zelo, de forma artesanal e personalizada.</p>
          <img src={ logo } alt="" className={ style.logo } />
        </div>
      </div>
    </div>
  );
}

export default About;