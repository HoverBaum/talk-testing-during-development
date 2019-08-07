/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useDeck } from 'mdx-deck'

const Provider = ({ children }) => {
  const state = useDeck()

  return (
    <div
      css={css`
        color: #162521;
        background-color: #f8fbfb;

        & li {
          margin: 0.75rem 0;
        }

        & sup {
          font-weight: normal;
          font-size: 0.66em;
        }
      `}
    >
      {children}

      {state.index === 0 ? (
        ''
      ) : (
        <p
          css={css`
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            font-size: 1.25rem;
            margin: 0;
            font-weight: 300;
            font-family: sans-serif;
          `}
        >
          <span>{state.index}</span>/<span>{state.length - 1}</span>
        </p>
      )}
    </div>
  )
}

export default Provider
