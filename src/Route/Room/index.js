import {h, Component} from 'preact';
import fetch from 'unfetch';

import Hero from '../../Components/Hero';
import ImgThumb from '../../Components/ImgThumb';

import sr from '../../Components/ScrollReveal.js';

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRoom:{},
    }
  }

  componentDidMount() {
    fetch('data/room.json')
    .then(resp => resp.json())
    .then(respData => {
      this.setState({
        dataRoom: respData.roomAndSuite,
      })
    })
    .catch(err => (console.log(err)));

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
    const dataRoom = this.state.dataRoom;
    const RenderObj = Object.keys(dataRoom)
      .map(k => {
        return (
          <li className="db mb4 mb0-l w-60-l sr-appear">
            <ImgThumb
              name={dataRoom[k].name}
              description={dataRoom[k].description}
              link={dataRoom[k].link}
              image={dataRoom[k].images[0]}
            />
          </li>
        )
      })

    // Render Components
    return (
      <div>
        <section>
          <Hero
            image={"img/room/room.jpg"}>
            <div className="mb4">
            <h2 className="measure-wide center f1 f-subheadline-l ttc serif lh-solid mb3">68 rooms for your comfort</h2>
            <p className="dn db-l f4-l measure-wide center">We offer an unparalleled collection of rooms and suites to inspire The Verdant S+F Boutique Hotel’s discerning guests. Business and weekend travelers may choose a relaxing and contemporary space with The Verdant S+F Boutique Hotel Executive Lounge access and city views, while families and executives can opt for a lavish suite with spacious residential feeling. Chic urban amenities include private terraces, stylish marble bathrooms, and luxurious personal amenities.</p>
          </div>
          </Hero>
        </section>

        <section>
          <div className="mw9 center ph6-l">
            <ul class="cf fl-zigzag fpt8-l">
              {RenderObj}
            </ul>
          </div>
        </section>

      </div>
    );
  }
}
