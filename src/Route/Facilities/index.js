import {h, Component} from 'preact';
import fetch from 'unfetch';

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
    fetch('/data/facilities.json')
    .then(resp => resp.json())
    .then(respData => {
      this.setState({
        dataFacilities: respData.facilities,
      })
    })
    .catch(err => (console.log(err)))
  }

  render() {
    const dataFacilities = this.state.dataFacilities;
    const RenderObj = Object.keys(dataFacilities)
      .map(k => {
        return (
          <li className="db mb4 mb6-l w-60-l">
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
            <ul class="cf fl-zigzag">
              {RenderObj}
            </ul>
          </div>
        </section>

      </div>
    );
  }
}
