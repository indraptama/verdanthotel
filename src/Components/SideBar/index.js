import {h, Component} from 'preact';
import anime from 'animejs';


export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarActive: this.props.isSideBarActive,
    }
  }

  componentDidMount(){

  }

  componentWillUpdate(){
    const SideBar = document.querySelector('#SideBar');
    this.setState({
      isSideBarActive: this.props.isSideBarActive,
    });

    const DrawerTrigger = this.props.isSideBarActive ?
      anime.timeline()
        .add(animeConfig.SideBar_layer.in)
        .add(animeConfig.SideBar_container.in)
      :
      anime.timeline()
        .add(animeConfig.SideBar_container.out)
        .add(animeConfig.SideBar_layer.out);

  }

  render() {

    // style
    const Style = {
      SideBar_layer: {
        position: 'fixed',
        minWidth: window.innerWidth,
        height: '100%',
        backgroundColor: '#000',
        left: (-1 * window.innerWidth),
        top: 0,
        bottom:0,
        zIndex: 998,
      },

      SideBar_container: {
        position: 'fixed',
        minWidth: 300,
        height: '100%',
        backgroundColor: this.props.backgroundColor,
        left: (-1 * 300),
        top: 0,
        bottom:0,
        zIndex: 999,
      }

    }

    return (
      <div className="div">
        <div style={Style.SideBar_layer} id="SideBar_layer" />
        <div id="SideBar_container" style={Style.SideBar_container}>
          {this.props.children}
        </div>
      </div>);
  }
} // end of Components


const animeConfig = {
  SideBar_layer: {
    in: {
      targets: '#SideBar_layer',
      translateX:  {
        value: (1 * window.innerWidth),
        duration: 1,
        elasticity: 200,
        easing:[0.0, 0.0, 0.2, 1],
        },
      opacity: {
      value: 0.5,
      duration:1
      }
    },
    out: {
      targets: '#SideBar_layer',
      translateX:  {
        value: (0),
        duration: 1,
        elasticity: 200,
        easing:[0.0, 0.0, 0.2, 1],
      },
      opacity: {
        value: 0,
        duration:1
      }
    }
  },
  SideBar_container: {
    in: {
      targets: '#SideBar_container',
      translateX:  {
        value: (1 * 300),
        duration: 200,
        elasticity: 200,
        easing:[0.0, 0.0, 0.2, 1],
        },
    },
    out: {
      targets: '#SideBar_container',
      translateX:  {
        value: (0),
        duration: 200,
        elasticity: 200,
        easing:[0.0, 0.0, 0.2, 1],
      },
    }
  },

}
