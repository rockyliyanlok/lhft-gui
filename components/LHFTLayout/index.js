import { Layout } from 'antd'
import LHFTContent from '../LHFTContent'
import LHFTSlider from '../LHFTSlider'
import React from 'react'

const LHFTLayout = ({ children }) => {
  return (
    <Layout>
      <LHFTSlider />
      <LHFTContent>
        {children}
      </LHFTContent>
    </Layout>
  )
}

export default LHFTLayout
