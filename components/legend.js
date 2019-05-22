/**
 * A legends to explain symbols used later on.
 */

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export const BackgroundImage = ({items}) => (
  <div
    css={css`
      width: 60rem;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 50% 50%;
      grid-row-gap: 1rem;
      margin: 0 auto;
    `}
  >
    {items.map(item => (
      <div
        css={css`
          margin-top: 1em;
        `}
      >
        {item.src ? <img src={item.src}
          css={css`
            height: 3em;
            margin: 0 auto;
            display: block;
          `}
        /> : ''}
        {item.emoji ? <span
          css={css`
            text-align: center;
            display: block;
            font-size: 7rem;
          `}
        >
          {item.emoji}
        </span> : ''}
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
