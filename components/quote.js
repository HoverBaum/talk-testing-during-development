import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useColors from '../lib/useColors'

const Quote = ({ children, size = 1, onImage }) => {
  const colors = useColors()
  const quoteStyle = {
    color: colors.primary,
    fontSize: '1.2em',
  }
  return (
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
}

export default Quote
