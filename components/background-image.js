/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const BackgroundImage = ({src, children}) => (
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
  </div>
)

export default BackgroundImage
