import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useColors from '../lib/useColors'

const SlideHeadline = ({ children, sectionTitle }) => {
  const colors = useColors()
  return (
    <h2
      css={{
        position: 'fixed',
        top: 0,
        left: '10vw',
        borderBottom: `1px solid ${colors.headline}`,
        width: '80vw',
        fontWeight: 300,
        color: colors.headline,
        marginTop: '0.5em',
      }}
    >
      {sectionTitle && (
        <>
          <span
            css={{
              color: colors.primary,
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
}

export default SlideHeadline
