import { useDeck } from 'mdx-deck'

/**
 * @returns {{
 *  primary: String
 *  text: String
 *  background: String
 *  headline: String
 * }}
 */
const useColors = () => {
  const deck = useDeck()
  const { theme: { colors } = {} } = deck
  return {
    primary: 'black',
    text: 'black',
    ...colors,
  }
}

export default useColors
