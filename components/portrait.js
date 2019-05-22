/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const dimension = '40rem'

export const Portrait = ({src}) => (
  <img
    css={{
      width: dimension,
      height: dimension,
      maxWidth: '100%',
      boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
    }}
    src={src}
  />
)

export default Portrait
