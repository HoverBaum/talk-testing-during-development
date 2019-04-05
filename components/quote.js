/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const quoteStyle = {
  color: '#4286f4',
  fontSize: '1.2em'
}

const Quote = ({children, size = 1, onImage}) => (
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
)

export default Quote
