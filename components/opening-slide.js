import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const OpeningSlide = ({ title, author, subtitle }) => (
  <hgroup
    css={{
      width: '70vw',
    }}
  >
    <h1
      css={{
        margin: 0,
        fontSize: '2.5em',
        color: '#334a5e',
        borderBottom: '1px solid #334a5e',
        paddingBottom: '1rem',
      }}
    >
      {title}
    </h1>
    {subtitle && (
      <h4
        css={{
          marginTop: '2rem',
          color: '#cc4a1a',
        }}
      >
        {subtitle}
      </h4>
    )}
    {author && (
      <a href='https://hendrikwallbaum.de' target='_blank'>
        <h4
          css={{
            position: 'absolute',
            bottom: 0,
            width: '80vw',
            marginTop: '2rem',
            color: '#cc4a1a',
            textAlign: 'right',
          }}
        >
          by {author}
        </h4>
      </a>
    )}
  </hgroup>
)

export default OpeningSlide
