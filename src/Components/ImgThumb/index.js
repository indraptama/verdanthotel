import {h, Component} from 'preact'

const ImgThumb = (props) => {
  return (
    <div class="RoomThumbnail fl w-60">
      <div class="dib relative white" href="">
        <div class="RoomThumbnail-img mb4">
          <img src={props.image}/>
        </div>

        <div class="RoomThumbnail-title" style={Style.title}>
          <h3 class="f-headline sans lh-solid tracked-tight ma0 fw6">
            {props.name}</h3>
        </div>

        <div class="RoomThumbnail-desc ml6 mb4">
          <div class="measure">
            <p class="f4">{props.description}</p>
          </div>
        </div>

        <div class="RoomThumbnail-action ml6">
          <a class="f6 sans black pv2 ph5 link dib ba bw1 b--white-50 bg-white b" href={props.link}>View Detail</a>
        </div>

      </div>
    </div>


  ) // return const
}

export default ImgThumb

const Style = {
  'title': {
    'transform': "rotate(-90deg)",
    'transform-origin': 'left top 0',
    'position': 'absolute',
    'left': '-100px',
    'bottom': '-100px',
  }
}
