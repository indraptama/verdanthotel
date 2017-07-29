import { h, Component } from 'preact';
import { Router } from 'preact-router';
import anime from 'animejs';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Route/Home';
import Room from './Route/Room';
import Explore from './Route/Explore';
import Facilities from './Route/Facilities';
import Contact from './Route/Contact';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  constructor(props) {
    super(props);
    this.state= {
      isChangePage: false,
      isLoading: false,
      isFinishLoading: true,
    }
  }


	handleRoute = e => {
    this.currentUrl = e.url;
    window.scrollTo(0, 0);
    anime({
      targets: '#main',
      opacity: 0,
      duration: 1000,
    });

    


	};

	render() {


		return (
			<div id="app">
				<Header />
        <main id="#main">
  				<Router onChange={this.handleRoute}>
            <Home path="/" />
            <Room path="/rooms" />
  					<Explore path="/explore/" />
            <Facilities path="/facilities/" />
  					<Contact path="/contact/" />
  				</Router>
        </main>
				<Footer />
			</div>
		);
	}
}


function TrasitionPanel() {
  return(
    <div className="transitionPanel" style={Style.transitionPanel}></div>
  )
}

const Style = {
  transitionPanel: {
    width: window.innerWidth,
    height: window.innerHeight,
    position: 'fixed',
    zIndex: '10000',
    top: 0,
    left: (window.innerWidth * -1),
    right: 0,
    bottoo: 0,
    backgroundColor: 'black',
  }
}

function toTransparent() {
  anime({
    target: 'main',
    opacity: 0,
    duration: 1000,
  })
}

// anime({
//   targets: 'div',
//   translateX: [
//     { value: 100, duration: 1200 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 2000,
//   loop: true
// });
