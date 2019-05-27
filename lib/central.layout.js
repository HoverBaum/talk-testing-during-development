import React from 'react'
import Flex from './layout/my-flex'
import Box from './layout/my-box'

const Central = ({ children }) => {
  return (
    <Flex
      css={{
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box>{children}</Box>
    </Flex>
  )
}

export default Central
