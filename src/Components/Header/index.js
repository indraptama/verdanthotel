import { h, Component } from 'preact';
import { Link } from 'preact-router';

import './style.css';
import SideBar from '../SideBar';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarActive: true,
    }
    this._sideBarTrigger = this._sideBarTrigger.bind(this);
  }


  _sideBarTrigger(e) {
    e.preventDefault();
    this.setState({
      isSideBarActive: !this.state.isSideBarActive,
    })
  }

	render() {
    // Main Navigation
    const renderMainNavigation = siteNav.map((navLink,i) => {
      return (
        <Link href={navLink.href} className="dib link white mh3 f5 ttc">{navLink.name}</Link>
      )
    });

    // Sidebar Navigation
    const renderSideNavigation = siteNav.map((navLink,i) => {
      return (
        <li>
          <Link href={navLink.href} className="pa2 db link white mh3 f5 ttc" onClick={this._sideBarTrigger}>{navLink.name}</Link>
        </li>
      )
    });


		return (
      <div>
			<header class="MainHeader bg-black white ph4">
				<div className="MainHeader_container flex items-center justify-between h3">
					<div className="MainHeader_smallMenu dn-l lh-solid">
						<a href="#" className="dib link white ttu sans f7" onClick={this._sideBarTrigger}>menu</a>
					</div>

					<div className="MainHeader_logo">
						<h1 className="f4 m0 lh-solid serif">S+F</h1>
					</div>

					<nav className="MainHeader_nav dn db-l">
	          {renderMainNavigation}
					</nav>

					<div className="MainHeader_user dn db-l">
						<a href="#" className="link dib white"  onClick={this._sideBarTrigger}>test Menu</a>
						<span className="dib mh3">|</span>
						<Link href="/login" className="link dib white">Login</Link>
					</div>

					<div className="MainHeader_smallMenu dn-l lh-solid">
						<a href="#" className="dib link white ttu sans f7 pa2 bg-blue br1"  onClick={this._sideBarTrigger}>Book Now</a>
					</div>
				</div>
			</header>

      <aside>
        <SideBar
          backgroundColor="#000"
          isSideBarActive={this.state.isSideBarActive}
        >
          <div className="mt5">
            <ul>
              {renderSideNavigation}
            </ul>
          </div>
        </SideBar>
      </aside>




    </div>
		);
	}
}

const siteNav = [
  {
    "href": "/",
    "name": "home"
  },
  {
    "href": "/rooms",
    "name": "rooms & Suite"
  },
  {
    "href": "/explore",
    "name": "explore"
  },
  {
    "href": "/facilities",
    "name": "facilities"
  },
  {
    "href": "/event",
    "name": "event"
  },
  {
    "href": "/contact",
    "name": "contact"
  }
]
