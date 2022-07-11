import React from 'react';
import Particles from 'react-particles-js';
import {  withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

//React Redux
import { connect } from 'react-redux';

//Components & Bootstrap
import Footer from '../../core/Footer';
import ResponsivePlayer from '../../core/ResponsivePlayer';
import GridList from '../../core/GridList';

//Images
import Logo from '../../assets/img/Logo white.png';

//CSS Files
import '../../assets/CSS/Home.css';

class HomePage extends React.Component {

    render() {
        const {  t, history} = this.props;
        return (
           <div>
        <Particles className="particles"
          params={
            {
              particles: 
                { 
                  number: { value: 100,
                  density: {enable: true, value_area: 2000}
                        }
                }
            }
      }>
        
        </Particles>
        <div className="call-to-action">
            <img className="logo-call-to-action" src={Logo} alt="logo"/>
            <h2 className="caption-call-to-action">{t('portailWeb')}</h2>
            <Button className="btn-call-to-action" variant="warning">{t('welcome')}</Button>
        </div>

        <div className="section1">
        <div className="features">
          <div className="box">
            <div className="icon">
              <i className="fas fa-hotel" area-hidden="true"></i>
            </div>
            <div className="content">
              <h3>Hôtels</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fas fa-utensils" area-hidden="true"></i>
            </div>
            <div className="content">
              <h3>Restaurants</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fas fa-map-marker-alt" area-hidden="true"></i>
            </div>
            <div className="content">
              <h3>Monuments</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ResponsivePlayer/>

      <div id="restaurants" className="restaurants-section">
        <div className="restaurants-section-title">
          Restaurants
        </div>
      </div>

      <div className="restaurants-container">
          <div className="gridlist">
          <GridList/>
          </div>
          <div className="restaurants-call-to-action">
            <div className="caption-restaurants-call-to-action">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum when it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
              <Button className="btn-restaurants-call-to-action" variant="outline-danger">Consulter les restaurants</Button>
          </div>
      </div>

      <div id="activities" className="xop-section">
        <div className="activities-section">Activitees</div>
        <ul className="xop-grid">
          <li>
            <div className="xop-box xop-img-1">
              <a href="#">
                <div className="xop-info">
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="xop-box xop-img-2">
              <a href="#">
                <div className="xop-info">
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="xop-box xop-img-3">
              <a href="#">
                <div className="xop-info">
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="xop-box xop-img-4">
              <a href="#">
                <div className="xop-info">
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Footer/>
        
    </div>
    );
  }

}

const connectedHomePage = connect(state =>
    ({ test: state.common.test }))(HomePage);
const withTranslate = withTranslation()(connectedHomePage);
const withrouter = withRouter(withTranslate)
export { withrouter as HomePage };