import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const OpeningSlide = ({ title, author }) => (
  <hgroup
    css={{
      width: '70vw'
    }}
  >
    <h1
      css={{
        margin: 0,
        fontSize: '2.5em',
        color: '#334a5e',
        borderBottom: '1px solid #334a5e',
        paddingBottom: '1rem'
      }}
    >
      {title}
    </h1>
    {author && (
      <a href='https://hendrikwallbaum.de' target='_blank'>
        <h4
          css={{
            float: 'right',
            marginTop: '2rem',
            color: '#cc4a1a'
          }}
        >
          {author}
        </h4>
      </a>
    )}
  </hgroup>
)

export default OpeningSlide
