import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'

const { Content: AntdContent, Footer } = Layout

const Container = styled(Layout)`
  margin-left: 200px;
  min-height: 100vh;
`

const Wrapper = styled(AntdContent)`
  overflow: initial;
  margin: 24px 16px 0;
`

const Content = styled.div`
padding: 24px;
`

const LHFTContent = ({ children }) => (
  <Container>
    <Wrapper className="height--100p">
      <Content className="height--100p bg--white">
        {children}
      </Content>
    </Wrapper>
    <Footer className="ta--center">LHFT GUI ©2021 Created by Rocky Li</Footer>
  </Container>
)

export default LHFTContent
