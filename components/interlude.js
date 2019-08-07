import React from 'react'

const Interlude = ({ text, style = {} }) => (
  <h2
    css={{
      fontSize: '3em',
      color: '#334a5e',
      borderBottom: '1px solid #334a5e',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      ...style,
    }}
  >
    {text}
  </h2>
)

export default Interlude
