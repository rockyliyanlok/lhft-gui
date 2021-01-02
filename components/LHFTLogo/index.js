import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 32px;
  margin: 16px;
`

const Logo = styled.div`
  width: 32px;
  height: 32px;
  background-image: url('/logo.png');
  border-radius: 50%;
`

const LabelWrapper = styled.div`
  margin-left: 10px;
`

const Label = styled.div`
  font-size: 20px;
`

const LHFTLogo = () => (
  <Container className="d--flex">
    <Logo className="bgimg--center" />
    <LabelWrapper className="d--flex flex-y--center">
      <Label className="c--white">LHFT GUI</Label>
    </LabelWrapper>
  </Container>
)

export default LHFTLogo
