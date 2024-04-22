import About from "./components/About/About"
// import Alert from "./components/Alert/Alert"
import Atuacao from "./components/Atuacao/Atuacao"
import Contato from "./components/Contato/Contato"
import Equipe from "./components/Equipe/Equipe"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Stats from "./components/Stats/Stats"

function App() {
  console.log(`
  Devoloped by: Igor Righi
  
  Get in touch:  
    LinkedIn: https://www.linkedin.com/in/igor-righi/
    GitHub: https://github.com/righigor
    Email: righigordev@gmail.com`)
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
      {/* <Alert /> */}
    </>
  )
}

export default App
