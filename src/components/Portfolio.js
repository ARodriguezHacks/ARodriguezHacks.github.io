import React, { Component } from 'react';
import { Card } from 'react-bulma-components';
import { Content } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Portfolio extends Component {
  render() {
    return (
      <section className="container">
      <h1 className="title is-1">Projects</h1>
        <div className="columns is-multiline is-centered">
          <div className="column is-half-tablet is-one-third-desktop">
            <Card className="img">
              <Card.Image src="./assets/img/rhythmradiolandingcopy.png" />
              <Card.Content>
                <Content className="has-text-centered">
                <h3>Rhythm Radio</h3>
                A music player app with standard music controls built with React.js<br />
                <em>(JavaScript, React.js, Custom CSS, Font Awesome)</em><br />
                <a href="https://github.com/ARodriguezHacks/rhythm-radio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" className="icon-spacing" />View project on Github</a>
                  <br />
                  View demo on<br /> 
                  <a href="https://rhythmradio.herokuapp.com" target="_blank" rel="noopener noreferrer" className="has-text-link"> Heroku</a>
                  <br />
                </Content>
              </Card.Content>
            </Card>
          </div>
          <div className="column is-half-tablet is-one-third-desktop">
            <Card className="img">
              <Card.Image src="./assets/img/travelbucketlandingcopy.png" />
              <Card.Content>
                <Content className="has-text-centered">
                <h3>TravelBucket</h3>
                A Reddit-inspired social media app for sharing posts and comments within a travel blog community.<br />
                <em>(Ruby, Rails, Bootstrap 5)</em><br />
                <a href="https://github.com/ARodriguezHacks/travel-bucket-app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" className="icon-spacing" />View project on Github</a>
                <br />
                  View demo on<br /> 
                  <a href="https://travelbucketapp.herokuapp.com" target="_blank" rel="noopener noreferrer" className="has-text-link"> Heroku</a>
                </Content>
              </Card.Content>
            </Card>
          </div>
          <div className="column is-half-tablet is-one-third-desktop">
            <Card className="img">
              <Card.Image src="./assets/img/parle-chat-edit-min.png" />
              <Card.Content>
                <Content className="has-text-centered">
                  <h3>Parle!</h3>
                  A React.js chat app built with a realtime database.<br />
                  <em>(HTML5, Reactjs (JavaScript), Bootstrap 5)</em><br />
                  <a href="https://github.com/ARodriguezHacks/parle-app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" className="icon-spacing" />View project on Github</a>
                  <br />
                  View demo on<br /> 
                  <a href="https://my-firebase-react-chatapp.web.app" target="_blank" rel="noopener noreferrer" className="has-text-link"> Firebase</a>
                </Content>
              </Card.Content>
            </Card>
          </div>
          <div className="column is-half-tablet is-one-third-desktop">
            <Card className="img">
              <Card.Image src="./assets/img/bookmarktrove-3.png" />
              <Card.Content>
                <Content className="has-text-centered">
                  <h3>BookmarkTrove</h3>
                  Pinterest-clone for saving your web bookmarks<br />
                  <em>(Ruby on Rails, Bulma CSS Framework)</em><br />
                  <a href="https://github.com/ARodriguezHacks/bookmarktrove" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" className="icon-spacing" />View project on Github</a>
                  <br />
                  View demo on 
                  <a href="https://bookmarktrove.herokuapp.com" target="_blank" rel="noopener noreferrer" className="has-text-link"> Heroku</a>
                </Content>
              </Card.Content>
            </Card>
          </div>
          <div className="column is-half-tablet is-one-third-desktop">
            <Card className="img">
              <Card.Image src="./assets/img/magicpongupdate-4-copy.png" />
              <Card.Content>
                <Content className="has-text-centered">
                  <h3>Magic Pong</h3>
                  A recreation of the classic Pong game.<br />
                  <em>(HTML5, Vanilla JavaScript)</em><br />
                  <a href="https://github.com/ARodriguezHacks/magicpong" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" className="icon-spacing" />View project on Github</a>
                  <br />
                  View demo on 
                  <a href="https://magic-pong-game.herokuapp.com" target="_blank" rel="noopener noreferrer" className="has-text-link"> Heroku</a>
                </Content>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;
