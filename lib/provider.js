import React from 'react'
import { css } from '@emotion/core'


const Provider = ({ children, ...rest }) => {
  console.log(rest)
  return (
  <div>
    {children}

    {rest.index === 0 ? '' : (
      <p
        css={css`
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          font-size: 1.25rem;
          margin: 0;
          font-weight: 300;
        `}
      >
        
        <span>{rest.index}</span>
        /
        <span>{rest.slides.length - 1}</span>
      </p>
    )}
  </div>
)}

export default Provider