import { swiss as baseTheme } from 'mdx-deck/themes'
import Provider from './provider'
import Highlight, { defaultProps } from "prism-react-renderer";
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
      // Hackily fix ".get" beeing recognised as a keyword 😒
      tokens.forEach((line, lineIndex) => {
        line.forEach((token, i) => {
          if (!(token.content === 'get') || i === 0 || tokens[lineIndex][i-1].content !== '.') return
          tokens[lineIndex][i].types = ['function']  
        })
      })
      return (
      <pre className={className} style={{
        ...style,
        padding: '1rem',
        borderRadius: '0.5rem'
      }}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}}
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
}