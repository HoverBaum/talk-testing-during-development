import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const quoteStyle = {
  color: '#cc4a1a',
  fontSize: '1.2em',
}

const TableCaption = ({ children }) => (
  <span
    css={{
      float: 'right',
      marginTop: '1rem',
      fontSize: '0.75em',
    }}
  >
    {children}
  </span>
)

export default TableCaption
