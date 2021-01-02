import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.astronautBlue};
`

const Index = () => {
  return (
    <>
      <Head>
        <title>LHFT GUI</title>
      </Head>
      <Heading>LHFT</Heading>
    </>
  )
}

export default Index
