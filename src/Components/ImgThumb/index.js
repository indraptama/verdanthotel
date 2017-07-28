import {h, Component} from 'preact'
import './style.css'

const ImgThumb = (props) => {

  return (
      <div class="relative white">
        <div class="RoomThumbnail_img aspect-ratio aspect-ratio--4x3 mb3 mb0-l z-1">
          <div class="aspect-ratio--object cover" style={"background: url("+props.image +") center"}></div>
          <img src={props.image} class="dn" alt=""/>
        </div>
        <div className="fpl4-fpt8-l">
          <div class="RoomThumbnail_title mb3 tc tl-l w-80-l">
            <h3 class="f3 f-headline-l serif lh-solid ma0">{props.name}</h3>
          </div>

          <div class="RoomThumbnail_desc dn db-l ml6-l mb4">
            <div class="measure pa3" style={Style.RoomThumbnail_desc}>
              <p class="">{props.description}</p>
            </div>
          </div>

        <div class="RoomThumbnail_action tc tl-l ml6-l">
          <a class="f6 sans black pv2 ph5 link dib ba bw1 b--white-50 bg-white b" href={props.link}>View Detail</a>
        </div>
      </div>

      </div>



  ) // return const
}

export default ImgThumb

const Style = {
  title: {
    transform: "rotate(-90deg)",
    transformOrigin: 'left top 0',
    position: "absolute",
    left: "-100px",
    bottom: "-100px",
  },
  RoomThumbnail_desc: {
    backgroundColor: '#111',
  }
}
