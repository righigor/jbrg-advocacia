import About from "./components/About/About"
import Atuacao from "./components/Atuacao/Atuacao"
import Contato from "./components/Contato/Contato"
import Equipe from "./components/Equipe/Equipe"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Stats from "./components/Stats/Stats"

function App() {
  return (
    <>
      <Header />
      <div id="inicio">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <Stats />
      <div id="atuacao">
        <Atuacao />
      </div>
      <div id="equipe"
        data-aos="fade-zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-back"
      >
        <Equipe />
      </div>

      <div id="contato">
        <Contato />
      </div>
    </>
  )
}

export default App
