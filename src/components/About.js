import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="container">
        <h1 className="title is-size-1">About Me</h1>
        <div className="columns">
          <div className="column">
            <figure>
              <img src="./assets/img/angieprofile.jpg" className="profile-img" alt="Profile"/>
            </figure>
          </div>
          <div className="column">
            <h4 className="is-size-4">Hello! My name's Angie and I'm a web developer based in the Pacific Northwest.</h4>
            <br />
            <p>I'm passionate about writing clean code whether it's front-end or back-end and collaborating with fellow developers
              and designers.
            </p>
            <br />
            <p>Thanks again for stopping by!</p>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
