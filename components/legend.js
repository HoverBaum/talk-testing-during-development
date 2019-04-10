/**
 * A legends to explain symbols used later on.
 */

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const BackgroundImage = ({items}) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      max-width: 80vw;
      flex-wrap: wrap;
      justify-content: space-between;
    `}
  >
    {items.map(item => (
      <div
        css={css`
          width: 45%;
          margin-top: 1em;
        `}
      >
        <img src={item.src}
          css={css`
            height: 3em;
            margin: 0 auto;
            display: block;
          `}
        />
        <span
          css={css`
            display: block;
            text-align: center;
          `}
        >{item.title}</span>
      </div>
    ))}
  </div>
)

export default BackgroundImage