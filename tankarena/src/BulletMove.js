import React, {Component} from 'react'
import Bullet from './Bullet'

class BulletMove extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.bulletStartMove) {
      return (
        <Bullet top={this.props.top}
          direction={this.props.direction} left={this.props.left}
          onBulletStop={this.props.onBulletStop}
        />
      )
    }
    else {
      return (
        <div>  </div>
      )
    }
  }
}

export default BulletMove
