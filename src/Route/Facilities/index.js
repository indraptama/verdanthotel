import {h, Component} from 'preact';
import fetch from 'unfetch';
import sr from '../../Components/ScrollReveal.js';

import Hero from '../../Components/Hero'
import ImgThumb from '../../Components/ImgThumb'

export default class Facilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFacilities:{},
    }
  }

  componentDidMount() {
    fetch('data/facilities.json')
    .then(resp => resp.json())
    .then(respData => {
      this.setState({
        dataFacilities: respData.facilities,
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
    // const appear = document.querySelectorAll('.appear');


  }

  render() {
    const dataFacilities = this.state.dataFacilities;
    const RenderObj = Object.keys(dataFacilities)
      .map((k,i) => {
        return (
          <li className="db mb4 mb0-l w-60-l sr-appear">
            <ImgThumb
              name={dataFacilities[k].name}
              description={dataFacilities[k].description}
              link={dataFacilities[k].link}
              image={dataFacilities[k].images[0]}
            />
          </li>
        )
      })

    // Render Components
    return (
      <div>
        <section>This is Explore</section>
        <section>
          <Hero
            image={"http://localhost:3000/img/facilities/hotel-ss.jpg"}
          />
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
