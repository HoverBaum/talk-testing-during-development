import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Impact = ({ children, size = 3, onImage }) => (
  <div
    css={css`
      font-size: ${size}em;
      font-weight: normal;
      color: ${onImage ? 'white' : '#334a5e'};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    `}
  >
    {children}
  </div>
)

export default Impact
