import './App.css';
import React, { useState, useEffect } from 'react';

import { Information } from "../components/information-personal";

import file from "../files/example.pdf";
import iconPerson from "../images/icon-person.png";
import { informations } from "../constants/information-personal";

import ApiGitHub from "../config/apiGitHub";

function App() {
  const [repositores, setRepositores] = useState([]);

  useEffect(() => {
    async function loadRepos() {
      const response = await ApiGitHub.get('users/elton0022/repos');
      setRepositores(response.data);
    }
    loadRepos();
  }, []);


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
        <div className="presentation">
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
        <img className="presentation-icon" src={iconPerson} alt="icon" />
      </div>

      <div className="app-about_me">
        <div className="presentation-name">
          <strong>Sobre mim</strong>
        </div>
        <p className="about_me-text">
          Meu nome é Elton Rodrigues e atualmente trabalho como desenvolvedor Full Stack. Minha carreira se
          iniciou em 2019 quando entrei em um projeto do estágio do curso de Ciência da Computação, onde comecei
          como desenvolvedor front-end Angular. Desde então estudei a aperfeiçoei meus conhecimentos em stacks baseadas em javascript e typescript.
        </p>
      </div>

      <div className="app-informations">
        {informations.map((info) => <Information key={info.name} name={info.name} img={info.img} value={info.value} />)}
      </div>

      <div className="app-projects">
        <div className="presentation-name">
          <strong>Projetos</strong>
        </div>

      </div>

    </div>
  );
}

export default App;
