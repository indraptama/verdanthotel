import {h, Component}from 'preact';
import fetch from 'unfetch';
import sr from '../../Components/ScrollReveal.js';
import Waypoint from 'preact-waypoint';

import Hero from '../../Components/Hero';
import ImgThumb from '../../Components/ImgThumb';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataCompany: {}
    }
  }

  componentDidMount() {
    fetch('data/company.json')
      .then(resp => resp.json())
      .then(respData => {
        this.setState({
          dataCompany: respData.companyProfile,
        })
      })
      .catch(err => console.error(err));

    setTimeout(function(){
      sr.reveal('.sr-appear', config)
    }, 200);

    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '200px',
      scale: 1,
      easing: 'ease',
    }
  }

  render() {
    const DataCompany = this.state.dataCompany;
    return (
      <div>
        <Hero image={DataCompany.image}>
        <h1 className="f1 f-subheadline-l lh-solid serif ttc">{DataCompany.slogan}</h1>
        </Hero>

        <section className="cf">
          <div className="mw7 ph3 pv5 pv6-l center tc">
            <h2 className="f2 f1-l mb4 lh-solid sr-appear">
              <span className="db f7 sans ttu tracked-mega mb3">welcome to</span>
              <span className="db mb3 serif">{DataCompany.name}</span>
              <span className="db f7 sans ttu tracked-mega mb3">Boutique Hotel</span>
            </h2>
            <p className="tl tc-l sr-appear">{DataCompany.about}</p>
          </div>
        </section>

        <div className="cf bg-pattern mb6" style={'background-image: url("img/assets/bank-note.svg")'}>
          <div className="" style={'transform:translateY(4rem)'}>
            <div className="mw8 pa5 bg-white center tc cover vh-75 sr-appear" style={'background: url("/img/explore/factory-s.jpg") center'}>
          </div>
        </div>
        </div>
        <div className="cf mb5 mb6-l">
          <div className="mw7 ph3  center tc tl-l">
            <h2 className="f2 f1-l mb4 lh-solid sr-appear">
              <span className="db f7 sans ttu tracked-mega mb3">Exlpore</span>
              <span className="db mb3 serif">Industrial Revolution Museum</span>
            </h2>
            <p className="measure mb4 center mh0-l sr-appear">Inspired by England Industrial Revolution, we want to bring new unique experience on every moments you stay with us.</p>
            <a class="f6 sans black pv2 ph5 link dib ba bw1 b--white-50 bg-white sr-appear" href="#">View Detail</a>
          </div>
        </div>
      </div>
    );
  }
}
