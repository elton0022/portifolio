import './App.css';

import file from "../files/example.pdf";
import iconPerson from "../images/icon-person.png";

function App() {
  return (
    <div className="app">

      <header className="app-header">
        <strong className="header-title">
          Portifólio
        </strong>
        <div className="header-nav">
          <a href="">Sobre mim</a>
          <a href="">Projetos</a>
          <a href="">Serviços</a>
          <a href="">Minhas skills</a>
        </div>
      </header>

      <div className="app-profile">

        <div className="app-presentation">
          <div className="presentation-name">
            <strong>Olá, eu sou o</strong>
            <br />
            <strong>Elton :)</strong>
          </div>

          <span className="presentation-stack">Desenvolvedor Full Stack</span>

          <div className="presentation-actions">
            <a className="buttom action-cv" href={file} target="_blank"> Download CV</a>
            <a className="buttom action-contact" href="mailto:eltonrodrigues0022.er@gmail.com" target="_blank"> Entrar em contato</a>
          </div>
        </div>

        <img className="presentation-icon" src={iconPerson} alt="icon"/>


      </div>
    </div>
  );
}

export default App;
