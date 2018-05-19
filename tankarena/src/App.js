import React, { Component } from 'react';
import './index.css'
import ActiveUsers from './ActiveUsers.js';
import BulletMove from './BulletMove'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeList: [
        "player1",
        "player2",
        "player3"
      ],
      top: 500,
      left: 700,
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
        top -= (top > 10 ? 10 : 0);
        direction = 0
        break;
      case "s":
        top += (top < 590 ? 10 : 0);
        direction = 2
        break;
      case "d":
        left += (left < 860 ? 10 : 0)
        direction = 1
        break;
      case "a":
        left -= (left > 20 ? 10 : 0)
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
              <div className="tank" style={{"top": this.state.top + "px", left: this.state.left + "px",
                "transform": `rotate(${this.state.moveDirection * 90}deg)`
              }}/>

              <BulletMove direction={this.state.moveDirection}
                top={this.state.top} left={this.state.left}
                bulletStartMove={this.state.bulletStartMove}
                onBulletStop={this.handleBulletMovement}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
