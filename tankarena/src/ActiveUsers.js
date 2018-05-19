import React, { Component } from 'react';

class ActiveUsers extends Component {
  render() {
    return (
      <div>
        {
          this.props.activeList.map((data, index) => {
            return <div key={index} className="row">
              {data}
            </div>
          })
        }
      </div>
    );
  }
}

export default ActiveUsers;
