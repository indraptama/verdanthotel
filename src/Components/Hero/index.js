
import {h, Component } from 'preact'
import './style.css'

const Hero = (props) => {
  return (
    <div className="Hero flex justify-center items-end items-center-l vh-min100 relative">
      <div className="Hero_media absolute cover" style={"background: url("+props.image +") center"}></div>
      <div className="Hero_layer"></div>
      <div className="Hero_container mw8 center ph4 tc-l relative z-5 cf">
        {props.children}
      </div>
    </div>
  )
}


export default Hero
