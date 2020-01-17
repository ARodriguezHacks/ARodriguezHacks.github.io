import React from 'react';
import portfolioData from './../portfolioData';

const Portfolio = () =>  {
    return (
      <section className="container portfolio-container">
      <h1 className="title is-1">Projects</h1>
        {portfolioData.map( item => {
          return (
          <div className="project is-clearfix" key={item.id}>
            <a href={item.deployed} target="_blank" rel="noopener noreferrer"><img src={item.image} alt={item.alt} className="card-display is-pulled-left" /></a>
            <div className="project-text is-pulled-left">
              <h2 className="is-size-2">{item.title}</h2>
              <h5 className="is-size-6">{item.description}</h5>
              <div className="logo-section">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="logo-margin">
                  <img src="./assets/icons/001-github.png" alt="Github logo"/></a>
                <a href={item.deployed} target="_blank" rel="noopener noreferrer">
                <img src={item.logo} alt={item.deployedAlt}/></a>
              </div>
            </div>
          </div>
          );
        })}
      </section>
    )
}

export default Portfolio;
