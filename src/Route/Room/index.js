import {h, Component} from 'preact';
import fetch from 'unfetch';

import Hero from '../../Components/Hero'
import ImgThumb from '../../Components/ImgThumb'

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRoom:{},
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/room.json')
    .then(resp => resp.json())
    .then(respData => {
      this.setState({
        dataRoom: respData.roomAndSuite,
      })
    })
    .catch(err => (console.log(err)))
  }

  render() {
    const dataRoom = this.state.dataRoom;
    const RenderObj = Object.keys(dataRoom)
      .map(k => {
        return (
          <li className="db mb4 mb6-l w-60-l">
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
