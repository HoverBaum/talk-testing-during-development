/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const BackgroundImage = ({credit, creditLink}) => (
  <div
    css={css`
      position: fixed;
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
      & a, &p {
        color: lightgrey;  
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
)

export default BackgroundImage
