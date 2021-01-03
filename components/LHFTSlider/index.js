import { Layout, Menu } from 'antd'
import {
  SettingOutlined,
  TableOutlined
} from '@ant-design/icons'
import LHFTLogo from '../LHFTLogo'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

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
      <Menu.Item key={'realtime'} icon={<TableOutlined />}>
        <Link href={'/'}>
          Realtime
        </Link>
      </Menu.Item>
      <Menu.Item key={'settings'} icon={<SettingOutlined />}>
        <Link href={'/settings'}>
          Settings
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
)

export default LHFTSlider
