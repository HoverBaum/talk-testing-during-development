/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const BackgroundImage = ({src, credit, creditLink}) => (
  <div
    css={css`
      background: url(${src}) no-repeat center;
      background-size: cover;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
        opacity: 0.95;
      }
    `}
  >

    {credit ? (
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
    ) : ''}

  </div>
)

export default BackgroundImage
