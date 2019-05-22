import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Interlude = ({ text, src, style = {} }) => (
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
      <img
        src={src}
        css={{ widht: '1em', height: '1em', marginLeft: '0.3em' }}
      />
    </h2>
  </div>
)

export default Interlude
