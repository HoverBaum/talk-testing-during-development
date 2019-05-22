import { swiss as baseTheme } from 'mdx-deck/themes'
import Provider from './provider'
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsCodeTheme from './vsCode.highlight'

const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || 'language-javascript')
  let lang = 'javascript'
  if (match.length > 1) {
    lang = match[1]
  }
  return lang
}

const code = props => {
  return <Highlight
    {...defaultProps}
    language={getLanguage(props.className)}
    code={props.children}
    theme={vsCodeTheme}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => {
      // Hackily fix ".get" and ".as" beeing recognised as a keyword 😒
      tokens.forEach((line, lineIndex) => {
        line.forEach((token, i) => {
          if (!(token.content === 'get' || token.content === 'as') || i === 0 || tokens[lineIndex][i-1].content !== '.') return
          tokens[lineIndex][i].types = ['function']  
        })
      })
      return (
        <pre className={className} style={{
          ...style,
          padding: '0 1rem',
          borderRadius: '0.5rem',
          fontSize: '2.25rem',
          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
        }}>
          {/* Top bar making it look like an editor window. */}
          <div
            css={{
              paddingBottom: '1rem'
            }}
          >
            {/* copied from: https://carbon.now.sh/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false */}
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
              <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle>
                <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle>
                <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle>
              </g>
            </svg>
          </div>
          {/* The actual code part. */}
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>)
      }
    }
  </Highlight>
}

const pre = props => props.children

export const theme = {
  ...baseTheme,
  Provider,
  components: {
    pre,
    code
  },
  code: {
    backgroundColor: '#e8e8e8',
    borderRadius: '0.25rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    color: 'rgb(86, 156, 214)',
    padding: '0 0.2em'
  },
  h1: {
    margin: 0
  },
  Slide: {
    position: 'relative',
    '& > div': {
      width: '80vw',
      minHeight: '60vh',
    },
  }
}