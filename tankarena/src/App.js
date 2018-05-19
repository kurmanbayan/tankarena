import React, { Component } from 'react';
import './index.css'
import ActiveUsers from './ActiveUsers.js';
import BulletMove from './BulletMove'
import tank from './tank.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeList: [
        "player1",
        "player2",
        "player3"
      ],
      tankLocations: [
        {
          x: 20,
          y: 45
        },
        {
          x: 100,
          y: 40
        }
      ],
      top: 700,
      left: 800,
      bulletStartMove: false,
      moveDirection: 0,
    }
  }

  handleBulletMovement = () => {
    this.setState({
      bulletStartMove: !this.state.bulletStartMove
    })
  }

  handleKeyPress = (e) => {
    var top = this.state.top
    var left = this.state.left
    var direction = this.state.moveDirection

    switch (e.key) {
      case "w":
        top -= (top > 5 ? 5 : 0);
        direction = 0
        break;
      case "s":
        top += (top < 970 ? 5 : 0);
        direction = 1
        break;
      case "d":
        left += (left < 985 ? 5 : 0)
        direction = 2
        break;
      case "a":
        left -= (left > 20 ? 5 : 0)
        direction = 3
        break;
      case "l":
        if (!this.state.bulletStartMove) {
          this.handleBulletMovement()
        }
        break;
      default:
        break;
    }

    this.setState({
      top: top,
      left: left,
      moveDirection: direction
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ActiveUsers activeList={this.state.activeList}/>
          </div>
          <div className="col-md-9" onKeyDown={this.handleKeyPress} tabIndex="0">
            <div className="solidBorder" >
              <div className="tank" style={{"top": this.state.top + "px", left: this.state.left + "px"}}/>
              <BulletMove direction={this.state.moveDirection} top={this.state.top} left={this.state.left} bulletStartMove={this.state.bulletStartMove} onBulletStop={this.handleBulletMovement}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
