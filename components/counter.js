import React from 'react'

class Counter extends React.Component {

  state = {
    count: 0,
    displayMessage: false
  }

  onIncrement = () => {
    this.setState({count: this.state.count + 1})
  }

  onDisplayMessage = () => {
    this.setState({displayMessage: true})
  }

  render() {
    const {count, displayMessage} = this.state
    return (
      <div>
        <h1>Testing Page</h1>

        <button style={{fontSize: '2rem'}} onClick={this.onIncrement}>Increment</button>

        <p>Current count: {count}</p>        

        <button style={{fontSize: '2rem'}} onClick={this.onDisplayMessage}>Display Message</button>

        {displayMessage ? (
          <div>
            A message here
          </div>
        ) : <div style={{height: '1.2em'}}></div>}
      </div>
    )    
  }
}

export default Counter