import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const quoteStyle = {
  color: '#cc4a1a',
  fontSize: '1.2em',
}

const Quote = ({ children, size = 1, onImage }) => (
  <div
    css={css`
      font-size: ${size}em;
      font-style: italic;
      font-weight: 300;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: ${onImage ? 'white' : '#334a5e'};
    `}
  >
    <span style={quoteStyle}>“</span>
    {children}
    <span style={quoteStyle}>„</span>
  </div>
)

export default Quote
