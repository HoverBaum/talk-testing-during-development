const quoteStyle = {
  color: '#4286f4',
  fontSize: '1.2em'
}

const Quote = ({children, size = 1}) => (
  <div style={{
    fontSize: `${size}em`,
    fontStyle: 'italic',
    fontWeight: '300',
  }}>
    <span style={quoteStyle}>“</span>
    {children}
    <span style={quoteStyle}>„</span>
  </div>
)

export default Quote
