import {h, Component}from 'preact';
import fetch from 'unfetch';
import sr from '../../Components/ScrollReveal.js';
import Waypoint from 'preact-waypoint';

import Hero from '../../Components/Hero';
import ImgThumb from '../../Components/ImgThumb';
import RoomCard from '../../Components/RoomCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataCompany: {},
      dataRooms: {}
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


    fetch('data/room.json')
      .then(resp => resp.json())
      .then(respData => {
        this.setState({
          dataRooms: respData.roomAndSuite,
        })
      })
      .catch(err => console.error(err));

    setTimeout(function(){
      sr.reveal('.sr-appear', config)
    }, 250);

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

        <section className="flex-l mb5">
          <div className="w-100 w-50-l bg-pattern" style={'background-image: url("img/assets/bank-note.svg")'}>
            <div className="aspect-ratio aspect-ratio--1x1">
              <div className="aspect-ratio--object sr-appear">
                  <div className="aspect-ratio--object cover" style={'background-image: url("img/room/family/main.jpg")'} />
              </div>
            </div>
          </div>
          <div className="w-100 w-50-l relative flex-l items-center justify-center">
            <div className="div">
              <div className="measure-wide center pv4 ph3">
                <h3 className="db f7 sans ttu tracked-mega mb3 sr-appear">rooms</h3>
                <p className="sr-appear">We offer an unparalleled collection of rooms and suites to inspire The Verdant S+F Boutique Hotel’s discerning guests. Business and weekend travelers may choose a relaxing and contemporary space with The Verdant S+F Boutique Hotel Executive Lounge access and city views, while families and executives can opt for a lavish suite with spacious residential feeling. Chic urban amenities include private terraces, stylish marble bathrooms, and luxurious personal amenities.</p>
              </div>
              <div className="measure-wide center ph3 dn">
                <h3 className="db f7 sans ttu tracked-mega mb3 sr-appear dn">rooms Type</h3>
              </div>
            </div>
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
              <span className="db f7 sans ttu tracked-mega mb3">Explore</span>
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
