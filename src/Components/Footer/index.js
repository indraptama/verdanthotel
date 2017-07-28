import {h, Component} from 'preact';
import fetch from 'unfetch';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCompany:{},
      dataContact:{},
      dataPhone:[]
    }
  }

  componentDidMount() {
    fetch('data/company.json')
      .then(resp => resp.json())
      .then(respData => {
        this.setState({
          dataCompany: respData.companyProfile,
          dataContact: respData.companyProfile.contact,
          dataPhone: respData.companyProfile.contact.phone
        })
        console.log(respData.companyProfile.contact.address);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <footer className="f6 bg-black">
        <div className="mw9 center ph4 pv4 cf">
          <h3 className="serif f4 mb4 dn">{this.state.dataCompany.name + " Boutique Hotel"}</h3>
            <div className="fl w-100 w-25-l">
              <div className="mb3">
                <h5 className="f8 sans ttu tracked-mega mb2">Address</h5>
                <p>{(this.state.dataContact.address)}</p>
              </div>
            </div>

            <div className="fl w-100 w-25-l">
              <div className="mb3">
                <h5 className="f8 sans ttu tracked-mega mb2">Phone</h5>
                <ul className="list pl0">{Object.keys(this.state.dataPhone).map(key => <li>{this.state.dataPhone[key]}</li>)}</ul>
              </div>
            </div>

            <div className="fl w-100 w-25-l">
              <div className="mb3">
                <h5 className="f8 sans ttu tracked-mega mb2">email</h5>
                <p>{this.state.dataContact.email}</p>
              </div>
            </div>

            <div className="fl w-100 w-25-l">
              <div className="mb3">
                <h5 className="f8 sans ttu tracked-mega mb2">Social</h5>
                <p>{this.state.dataContact.email}</p>
              </div>
            </div>

          </div>
      </footer>
    );
  }
}
