import { Layout, Menu } from 'antd'
import LHFTLogo from '../LHFTLogo'
import React from 'react'
import styled from 'styled-components'
import {
  TableOutlined,
} from '@ant-design/icons'

const { Sider: AntdSlider } = Layout

const Sider = styled(AntdSlider)`
  overflow: auto;
  position: fixed;
  height: 100vh;
  left: 0;
`

const LHFTSlider = () => (
  <Sider>
    <LHFTLogo />
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1" icon={<TableOutlined />}>
        Realtime
      </Menu.Item>
    </Menu>
  </Sider>
)

export default LHFTSlider
