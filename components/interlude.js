import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Interlude = ({ text, style = {} }) => (
  <div>
    <h2
      css={{
        fontSize: '3em',
        color: '#334a5e',
        borderBottom: '1px solid #334a5e',
        display: 'flex',
        alignItems: 'center',
        ...style
      }}
    >
      {text}
    </h2>
  </div>
)

export default Interlude
