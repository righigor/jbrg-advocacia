import style from './About.module.css';

import perfil from '../../assets/imgs/perfil.jpg';
import logo from '../../assets/logomarca/logo-mini-white.jpeg';

function About() {
  return (
    <div>
      <div className={ style.container }>
        <img src={ perfil } alt="" className={ style.perfil } />
        <div className={ style.aboutContainer }>
          <h2>Sobre</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, accusantium officia nam numquam inventore doloribus maxime veniam impedit nisi laborum sunt quo sequi laboriosam illo tenetur tempore doloremque totam dolorem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus reprehenderit aliquam omnis suscipit odio id cumque sunt sit mollitia tempora, assumenda, deserunt, voluptates doloribus iure illum sapiente autem tenetur?</p>
          <img src={ logo } alt="" className={ style.logo } />
        </div>
      </div>
    </div>
  );
}

export default About;