import './App.css';
import React, { useEffect } from 'react';


import { informations } from "../constants/information-personal";
import { services } from "../constants/services";
import { skills } from "../constants/skills";

import { Information } from "../components/information-personal";
import { Project } from "../components/project";
import { Service } from "../components/service";
import { Skill } from "../components/skill";

import file from "../files/cv.pdf";
import iconPerson from "../images/icon-person.png";

import ApiGitHub from "../config/apiGitHub";

function App() {
  const [repositories, setRepositores] = React.useState([]);

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
          <a href="#about_me">Sobre mim</a>
          <a href="#projects">Projetos</a>
          <a href="#services">Serviços</a>
          <a href="#skills">Minhas skills</a>
        </div>
      </header>

      <div className="app-profile animate__animated animate__fadeIn">
        <div className="presentation">
          <div className="presentation-name">
            <strong>Olá, eu sou o</strong>
            <br />
            <strong>Elton :)</strong>
          </div>

          <span className="presentation-stack">Desenvolvedor Full Stack</span>

          <div className="presentation-actions">
            <a className="buttom action-cv" href={file} target="_blank" rel="noreferrer"> Download CV</a>
            <a className="buttom action-contact" href="mailto:eltonrodrigues0022.er@gmail.com" rel="noreferrer" target="_blank">Entrar em contato</a>
          </div>
        </div>
        <img className="presentation-icon" src={iconPerson} alt="icon" />
      </div>

      <div id="about_me" className="app-about_me animate__animated animate__bounce animate__fadeInUp">
        <div className="presentation-name">
          <strong>Sobre mim</strong>
        </div>
        <p className="about_me-text">
          Meu nome é Elton Rodrigues e atualmente trabalho como desenvolvedor Full Stack. Minha carreira se
          iniciou em 2019 quando entrei em um projeto do estágio do curso de Ciência da Computação, onde comecei
          como desenvolvedor front-end Angular. Desde então estudei a aperfeiçoei meus conhecimentos em stacks baseadas em javascript e typescript.
        </p>
      </div>

      <div className="app-informations animate__animated animate__bounce animate__fadeInUp">
        {informations.map((info, index) => <Information key={index} name={info.name} img={info.img} value={info.value} />)}
      </div>

      <div id="projects" className="app-projects animate__animated animate__bounce animate__fadeInUp">
        <div className="presentation-name">
          <strong>Projetos</strong>
        </div>
        <div className="repositories">
          {repositories.map((repo, index) =>
            <Project key={index}
              language={repo.language}
              name={repo.name}
              description={repo.description}
              url={repo.svn_url}
            />)}
        </div>
      </div>

      <div id="services" className="app-services animate__animated animate__bounce animate__fadeInUp">
        <div className="presentation-name">
          <strong>Serviços</strong>
        </div>
        <div className="services">
          {services.map((service, index) =>
            <Service key={index} name={service.name} img={service.img} />
          )}
        </div>
      </div>

      <div id="skills" className="app-skills animate__animated animate__bounce animate__fadeInUp">
        <div className="presentation-name">
          <strong>Minhas Skills</strong>
        </div>
        <div className="skills">
          {skills.map((skill, index) =>
            <Skill key={index} img={skill.img} />
          )}
        </div>

      </div>

      <footer>
          Orgulhosamente feito por <span className="my-name" >&nbsp;Elton Rodrigues </span>
      </footer>

    </div>
  );
}

export default App;
