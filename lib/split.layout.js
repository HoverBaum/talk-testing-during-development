import React from 'react'
import Flex from './layout/my-flex'
import Box from './layout/my-box'

const Split = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children)
  return (
    <Flex
      css={{
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box width={1 / 2} m={3}>{a}</Box>
      <Box width={1 / 2}>{rest}</Box>
    </Flex>
  )
}

export default Split