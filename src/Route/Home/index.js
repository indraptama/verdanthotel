import {h, Component}from 'preact';
import fetch from 'unfetch';
import Hero from '../../Components/Hero';

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
            <h2 className="f2 f1-l mb4 lh-solid">
              <span className="db f7 sans ttu tracked-mega mb3">welcome to</span>
              <span className="db mb3 serif">{DataCompany.name}</span>
              <span className="db f7 sans ttu tracked-mega mb3">Boutique Hotel</span>
            </h2>
            <p className="tl tc-l">{DataCompany.about}</p>
          </div>
        </section>

        <div className="cf bg-pattern mb6" style={'background-image: url("img/assets/bank-note.svg")'}>
          <div className="mw8 pa5 bg-white center tc cover vh-75" style={'transform:translateY(4rem);background: url("/img/explore/factory-s.jpg") center'}>
          </div>
        </div>
        <div className="cf mb5 mb6-l">
          <div className="mw7 ph3  center tc tl-l">
            <h2 className="f2 f1-l mb4 lh-solid">
              <span className="db f7 sans ttu tracked-mega mb3">Expore</span>
              <span className="db mb3 serif">Industrial Revolution Museum</span>
            </h2>
            <p className="measure mb4">Inspired by England Industrial Revolution, we want to bring new unique experience on every moments you stay with us.</p>
            <a class="f6 sans black pv2 ph5 link dib ba bw1 b--white-50 bg-white" href="#">View Detail</a>
          </div>
        </div>

      </div>
    );
  }
}
