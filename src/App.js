import React, { Component } from 'react';
import './App.scss';
import { Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee,faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';

library.add(fab, faCoffee, faHeart, faEnvelope);

class App extends Component {

  state = {
    isActive: false
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    return (
      <section>
        <div>
        <header className="container">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <Link to='/' className="navbar-item button">Home</Link>
              <button className="button navbar-burger" onClick={this.toggleNav}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className={ this.state.isActive ? "navbar-menu is-active" : "navbar-menu"}>
              <div className="navbar-end">
                <Link to='/About' className="navbar-item">About</Link>
                <Link to='/Portfolio' className="navbar-item">Portfolio</Link>
                <Link to='/Blog' className="navbar-item">Blog</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="wrapper">
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
        </main>
        <footer className="footer footer-position">
          <div className="content">
              <div className="is-pulled-left">
                <h4>
                  Made with <FontAwesomeIcon icon="heart" className="heart-spacing" />
                  and lots of <FontAwesomeIcon icon="coffee" />
                </h4>
                <p>© Angie Rodriguez</p>
              </div>
              <div className="is-pulled-right">
                <a href="https://medium.com/@angrodri902"><FontAwesomeIcon icon={['fab', 'medium']} size="2x" className="icon-spacing"/></a>
                <a href="https://www.linkedin.com/in/angie-rodriguez-web-developer/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="icon-spacing" /></a>
                <a href="https://github.com/ARodriguezHacks"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" className="icon-spacing" /></a>
                <a href="mailto:angrodri902@gmail.com"><FontAwesomeIcon icon="envelope" size="2x" className="icon-spacing" /></a>
              </div>
          </div>
        </footer>
        </div>
      </section>
    );
  }
}

export default App;
