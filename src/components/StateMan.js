import React, { Component } from 'react'

class StateMan extends Component {

    state={
        message: 'Please like our video',
        message2: 'Politics is bad',
        message3: 'We love eating food',
        sub: 'Subcribe'
    }

    btn = ()=>{
        this.setState({
            message: 'Thank you for liking our video',
            message2: 'Entertainment is good',
            sub: 'Thank you!'
        })
    }

  render() {
    return (
      <div>
          <h1 style={{color:'red'}}>{this.state.message}</h1>
          <h2>{this.state.message2}</h2>
          <h2>{this.state.message3}</h2>
          <button onClick={this.btn}>{this.state.sub}</button>

      </div>
    )
  }
}

export default StateMan