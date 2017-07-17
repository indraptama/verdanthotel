
import {h, Component } from 'preact'
import './style.css'

const Hero = (props) => {
  return (
    <div className="Hero flex vh-min75 items-center justify-center pv6 relative">
      <div className="Hero_media absolute cover" style={"background: url("+props.image +") center"}></div>
      <div className="Hero_container mw8 center ph4 tc relative z-1 cf">
        <h2 className="f2 f-subheadline-l mb4 serif lh-solid">
          68 Rooms for Your Comfort
        </h2>
        <p className="f4 measure center">Our hotel has 68 rooms (including 2 PRM) on 6 floors and two elevators. Two of the floors have balconies, and some rooms have a stunning view over the rooftops of Paris, the Pantheon or the Eglise du Val de Grace. Each room is tastefully decorated and has a private bathroom with bathtub or shower.</p>
      </div>
    </div>
  )
}


export default Hero
