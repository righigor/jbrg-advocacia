import { useEffect, useState } from "react"
import About from "./components/About/About"
import Atuacao from "./components/Atuacao/Atuacao"
import Contato from "./components/Contato/Contato"
import Equipe from "./components/Equipe/Equipe"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Stats from "./components/Stats/Stats"

function App() {
  const [sectionAbout, setSectionAbout] = useState<string | null>(null);
  const [sectionAtuacao, setSectionAtuacao] = useState<string | null>(null);
  const [sectionEquipe, setSectionEquipe] = useState<string | null>(null);
  const [sectionContato, setSectionContato] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById('about');
      const atuacaoElement = document.getElementById('atuacao');
      const equipeElement = document.getElementById('equipe');
      const contatoElement = document.getElementById('contato');
      if (aboutElement && aboutElement.getBoundingClientRect().top < window.innerHeight * 0.9) {
        setSectionAbout('about');
      } else {
        setSectionAbout(null);
      }
      if (atuacaoElement && atuacaoElement.getBoundingClientRect().top < window.innerHeight * 0.9) {
        setSectionAtuacao('atuacao');
      } else {
        setSectionAtuacao(null);
      }
      if (equipeElement && equipeElement.getBoundingClientRect().top < window.innerHeight * 0.9) {
        setSectionEquipe('equipe');
      } else {
        setSectionEquipe(null);
      }
      if (contatoElement && contatoElement.getBoundingClientRect().top < window.innerHeight * 0.9) {
        setSectionContato('contato');
      } else {
        setSectionContato(null);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div id="inicio">
        <Home />
      </div>
      <div id="about" style={{ opacity: sectionAbout ? 1 : 0, transition: 'opacity 1s' }}>
        <About />
      </div>
      <Stats />
      <div id="atuacao" style={{ opacity: sectionAtuacao ? 1 : 0, transition: 'opacity 1s' }}>
        <Atuacao />
      </div>
      <div id="equipe" style={{ opacity: sectionEquipe ? 1 : 0, transition: 'opacity 1s' }}>
        <Equipe />
      </div>
      <div id="contato" style={{ opacity: sectionContato ? 1 : 0, transition: 'opacity 1s' }}>
        <Contato />
      </div>
      <Footer />
    </>
  )
}

export default App
