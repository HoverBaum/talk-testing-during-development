/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const BackgroundImage = ({credit, creditLink}) => (
  <div
    css={css`
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      font-size: 1rem;
      z-index: 1001;
    `}
  >
    <p css={css`
      opacity: 0.66;
      font-size: small;
      margin: 0;
      &p {
        color: lightgrey; 
      }
    `}>
    {creditLink ? (
      <a
        href={creditLink}
        target="_blank"
        style={{color: 'lightgrey'}}
      >
        {credit}
      </a>
    ) : credit}
    
    </p>
  </div>
)

export default BackgroundImage
