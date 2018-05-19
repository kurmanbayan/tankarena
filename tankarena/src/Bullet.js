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
    var top = this.state.top
    var left = this.state.left
    if (this.props.direction === 0 || this.props.direction === 2) {
      left += 20
    }
    else {
      top += 20
    }
    this.setState({
      left: left,
      top: top,
      timer: setInterval(this.tick, 2)
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  tick = () => {
    if (this.state.left > 900 || this.state.top < 10 || this.state.top > 630 || this.state.left < 15) {
      this.setState ({
        delBullet: true
      })
      this.props.onBulletStop()
      clearInterval(this.state.timer)
    }

    var left = this.state.left
    var top = this.state.top

    switch (this.props.direction) {
      case 0:
        top -= 5;
        break;
      case 2:
        top += 5;
        break;
      case 1:
        left += 5;
        break;
      case 3:
        left -= 5;
        break;
      default:
        break;
    }

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
