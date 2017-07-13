import {h, Component} from 'preact';
import fetch from 'unfetch';

import ImgThumb from './Components/ImgThumb'

import roomAndSuite from './data/room.js'



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/room.json')
    .then(resp => resp.json())
    .then(dataRoom => {
      console.log(dataRoom);
    })
    .catch(console.error(err))
  }

  render() {
    return (
      <div class="mw8 center">
        <ImgThumb
          name=""
          link=""
          image=""
          description=""


        />
      </div>
    );
  }
}
