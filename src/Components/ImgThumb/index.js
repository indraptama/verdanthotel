const imgThumb = (props) => {
  return (
    <div class="RoomThumbnail fl mb6 w-60">
        <div class="RoomThumbnail-img">
          <a href={props.link} class="link dib relative white">
            <img src={props.image}/>
          </a>
        </div>


        <div class="RoomThumbnail-title">
          <h3 class="f-headline sans lh-solid tracked-tight ma0">{props.title}
          </h3>
        </div>

        <div class="RoomThumbnail-desc ml6">
          <div class="measure">
            <p class="f4">{props.desc}</p>
          </div>
      </div>

      <div class="RoomThumbnail-action ml6">
        <a href={props.link}" class="f6 sans black pv2 ph5 link dib ba bw1 b--white-50 bg-white b">View Detail</a>
      </div>

  </div>




  ) // return const
}
