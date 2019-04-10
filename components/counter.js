/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import './counter.css'

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
      <div
        css={css`
          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
          border-radius: 0.5rem;
        `}
      >
        <div className="website__header">
          <div className="website__header__circle"></div>
          <div className="website__header__circle"></div>
          <div className="website__header__circle"></div>
        </div>
        <div css={css`padding: 2rem;`}>
          <h1 css={{marginTop: 0}}>Testing Page</h1>

          <button style={{fontSize: '2rem'}} onClick={this.onIncrement}>Increment</button>

          <p>Current count: {count}</p>        

          <button style={{fontSize: '2rem'}} onClick={this.onDisplayMessage}>Display Message</button>

          {displayMessage ? (
            <div>
              A message here
            </div>
          ) : <div style={{height: '1.2em'}}></div>}
        </div>
      </div>
    )    
  }
}

export default Counter