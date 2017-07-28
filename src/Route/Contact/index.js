import {h, Component} from 'preact';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vh-min100 pt5 flex-l items-center">
        <div className="mw9 flex-l items-center center">

          <div className="bg-black ba b--black-50 center pa4 shadow-1 br2" style={Style.card}>
            <h2 className="center mb4 f2 tc tracked-tight"> Contact Us. </h2>
            <form action="">
              <ul>
                <li className="mb3">
                  <label htmlFor="" className="w-100">
                    <span className="db w-100 mb1 f7 ttu tracked ">Your Name</span>
                    <input type="text" className="white bg-black input-reset pa1 ba b--white-30 w-100"/>
                  </label>
                </li>
                <li className="mb3">
                  <label htmlFor="" className="w-100">
                    <span className="db w-100 mb1 f7 ttu tracked ">Your Email</span>
                    <input type="email" className="white bg-black input-reset pa1 ba b--white-30 w-100"/>
                  </label>
                </li>
                <li className="mb3">
                <label htmlFor="" className="w-100">
                  <span className="db w-100 mb1 f7 ttu tracked ">Your Message</span>
                  <textarea type="email" className="white bg-black input-reset pa1 ba b--white-30 w-100"/>
                </label>
                </li>
                <li>
                  <a class="f6 w-100 sans black pv2 ph5 link dib ba bw1 b--white-50 bg-white b tc" href="">Send Message</a>
                </li>
              </ul>


            </form>
      </div>
          </div>
      </div>);
  }
}

const Style = {
  card: {
    width: 400,
  }
}
