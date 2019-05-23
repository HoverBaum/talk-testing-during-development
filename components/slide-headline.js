import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const SlideHeadline = ({ children, sectionTitle }) => (
  <h2
    css={{
      position: 'absolute',
      top: 0,
      borderBottom: '1px solid #334a5e',
      width: '80vw',
      fontWeight: 300,
      color: '#334a5e'
    }}
  >
    {sectionTitle && (
      <>
        <span
          css={{
            color: '#cc4a1a'
          }}
        >
          {sectionTitle}
        </span>
        {children && <span> - </span>}
      </>
    )}
    {children}
  </h2>
)

export default SlideHeadline
