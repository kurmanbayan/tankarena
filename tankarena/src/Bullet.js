import React, {Component} from 'react'


class Bullet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top: props.top,
      left: props.left,
      delBullet: false,
      timer: 0
    }
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(this.tick, 30)
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  tick = () => {
    if (this.state.left > 1024) {
      this.setState ({
        delBullet: true
      })
      this.props.onBulletStop()
      clearInterval(this.state.timer)
    }

    var left = this.state.left
    var top = this.state.top

    // console.log(left, top)
    console.log(this.props.direction)
    switch (this.props.direction) {
      case 0:
        top -= 5;
        break;
      case 1:
        top += 5;
        break;
      case 2:
        left += 5;
        break;
      case 3:
        left -= 5;
        break;
      default:
        break;
    }

    // console.log(top)
    // console.log(left)

    this.setState ({
      left: left,
      top: top
    })
  }

  render() {
    return (
      <div className="bullet" style={{"top": this.state.top + "px", left: this.state.left + "px", "display": this.state.delBullet ? "none" : ""}} />
    )
  }
}

export default Bullet;
