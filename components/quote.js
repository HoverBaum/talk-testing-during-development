import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const quoteStyle = {
  color: '#4286f4',
  fontSize: '1.2em'
}

const Quote = ({children, size = 1, onImage, credit, creditLink}) => (
  <>
    <div 
      css={css`
        font-size: ${size}em;
        font-style: italic;
        font-weight: 300;
        color: ${onImage ? 'white' : 'inherit'};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      `}
    >
      <span style={quoteStyle}>“</span>
      {children}
      <span style={quoteStyle}>„</span>
    </div>

    {credit ? (
      <div
        css={css`
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          font-size: 1rem;
        `}
      >
        <p css={css`
          opacity: 0.66;
          font-size: small;
          margin: 0;
          & a, &p {
            color: ${onImage ? 'lightgrey' : 'black'};  
          }
        `}>
        {creditLink ? (
          <a
            href={creditLink}
            target="_blank"
          >
            {credit}
          </a>
        ) : credit}
        
        </p>
      </div>
    ) : ''}
  </>
)

export default Quote
