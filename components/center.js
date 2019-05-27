/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const Center = ({ children }) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
    `}
  >
    {children}
  </div>
)

export default Center
