import { h, Component } from 'preact';
import { Link } from 'preact-router';

import './style.css'

export default class Header extends Component {
	render() {
		return (
			<header class="MainHeader bg-black white flex items-center justify-between ph4">
				<h1 class="f4 fw8 m0 lh-solid">V+S</h1>
				<nav>
          <Link href="/" className="dib link white mh3 f5">Home</Link>
					<Link href="/rooms" className="dib link white mh3 f5">Room & Suite</Link>
					<Link href="/explore" className="dib link white mh3 f5">Explore</Link>
          <Link href="/facilities" className="dib link white mh3 f5">Facilities</Link>
          <Link href="/contact" className="dib link white mh3 f5">Contact</Link>
				</nav>
        <button>login</button>
			</header>
		);
	}
}
