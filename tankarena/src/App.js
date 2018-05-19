import React, { Component } from 'react';
import './index.css'
import ActiveUsers from './ActiveUsers.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeList: [
        "player1",
        "player2",
        "player3"
      ],
      top: 100,
      left: 200,
    }
  }

  handleKeyPress = (e) => {
    var top = this.state.top
    var left = this.state.left

    switch (e.key) {
      case "w":
        top -= 5;
        console.log("w")
        break;
      case "s":
        top += 5
        console.log("s")
        break;
      case "d":
        left += 5
        console.log("d")
        break;
      case "a":
        left -= 5
        console.log("a")
        break;
      case "l":
        console.log("fire")
        break;
      default:
        break;
    }

    this.setState({
      top: top,
      left: left
    })
  }

  render() {
    return (
      <div className="container" onKeyDown={this.handleKeyPress} tabIndex="0">
        <div className="row">
          <div className="col-md-3">
            <ActiveUsers activeList={this.state.activeList}/>
          </div>
          <div className="col-md-9">
            <div className="solidBorder" >
              <div className="tank" style={{"top": this.state.top + "px", left: this.state.left + "px"}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
