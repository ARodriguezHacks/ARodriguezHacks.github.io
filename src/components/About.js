import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="container">
        <section>
          <h1 className="title is-size-1">About Me</h1>
          <div className="columns">
            <div className="column is-5">
              <figure className="img-position">
                <img src="./assets/img/angieprofile.jpg" className="profile-img" alt="Profile"/>
              </figure>
            </div>
            <div className="column is-7">
              <section>
                <h4 className="is-size-4">Hello! My name's Angie and I'm a web developer based in the Pacific Northwest.</h4>
                <br />
                <section className="bio-padding">
                  <p>I'm passionate about writing clean code—whether it's front-end or back-end—and collaborating with fellow developers
                    and designers.
                  </p>
                  <br/>
                  <p>3 years ago I couldn't explain what a browser was, or how the web worked. I started off by learning
                    web design in 2016 and being introduced to HTML and CSS. After moving a few times, I eventually settled into
                    an online bootcamp called Bloc, now a part of the Thinkful family. After an intensive year and half, I graduated in June 2019
                    with a Certificate in Web Development.
                  </p>
                  <br/>
                  <p>
                    Before Bloc and web development, I was living in California, and all I had to my name was an undergraduate degree in Spanish Studies.
                    Learning web development has not been easy, but it's become incredibly fun and rewarding, especially when I compare its similarities to
                    learning a real foreign language. Now that I'm based in the Portland, OR area, I'm excited to embark on a new career, one I'll surely
                    enjoy and find fulfillment.
                  </p>
                  <br/>
                  <p>
                    When I'm not coding, I find time to study French on Duolingo, brush up on my Spanish, read a good book, and bake recipes
                    I find on Pinterest or Instagram. 
                  </p>
                  <br/>
                  <p>
                    I'm also open to collaborating, so feel free to reach out!
                  </p>
                  </section>
              </section>
            </div>
          </div>
        </section>
        <section>
          <h2 className="is-size-3" id="about-h2">What Can I Do?</h2>
          <section className="columns is-desktop">
            <section className="column is-one-third has-text-centered">
              <h4 className="is-size-4"><strong>Languages</strong></h4><br/>
              <ul className="is-flex-mobile">
                <li><img src="./assets/icons/icons8-html-5-50.png" alt="HTML icon" className="icon-adjust"/></li>
                <li><img src="./assets/icons/icons8-css3-50.png" alt="CSS icon" className="icon-adjust"/></li>
                <li><img src="./assets/icons/icons8-javascript-50.png" alt="JavaScript icon" className="icon-adjust"/></li>
                <li><img src="./assets/icons/icons8-ruby-programming-language-50.png" alt="Ruby icon" className="icon-adjust"/></li>
              </ul>
            </section>
            <section className="column is-one-third has-text-centered">
              <h4 className="is-size-4"><strong>Libraries/Frameworks</strong></h4><br/>
              <ul className="is-flex-mobile">
                <li><img src="./assets/icons/icons8-bootstrap-50.png" alt="Bootstrap icon"/></li>
                <li className="icon-adjust is-inline-block"><img src="./assets/icons/bulma-logo.png" alt="Bulma icon"/></li>
                <li><img src="./assets/icons/sass.png" alt="Sass icon"/></li>
                <li><img src="./assets/icons/icons8-react-native-50.png" alt="React icon"/></li>
                <li><img src="./assets/icons/iconfinder_redux_4691205.png" alt="Redux icon"/></li>
                <li><img src="./assets/icons/ruby-on-rails.png" alt="Ruby on Rails icon"/></li>
                <li className="icon-adjust is-inline-block"><img src="./assets/icons/rspec-logo.png" alt="Rspec icon"/></li>
              </ul>
            </section>
            <section className="column is-one-third has-text-centered">
              <h4 className="is-size-4"><strong>Tools</strong></h4><br/>
              <ul className="is-flex-mobile">
                <li><img src="./assets/icons/icons8-webpack-50.png" alt="Webpack icon"/></li>
                <li><img src="./assets/icons/icons8-heroku-50.png" alt="Heroku icon"/></li>
                <li><img src="./assets/icons/iconfinder_netlify_4691413.png" alt="Netlify icon"/></li>
                <li><img src="./assets/icons/icons8-ruby-gem-50.png" alt="Ruby Gems icon"/></li>
                <li><img src="./assets/icons/icons8-npm-50.png" alt="NPM icon"/></li>
                <li><img src="./assets/icons/yarn.png" width="50px" alt="Yarn icon"/></li>
                <li><img src="./assets/icons/icons8-octocat-50.png" alt="Github icon"/></li>
              </ul>
            </section>
          </section>
            <h2 className="has-text-centered is-size-3">Thanks again for stopping by!</h2>
        </section>
      </section>
    )
  }
}

export default About;
