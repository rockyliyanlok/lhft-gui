import { BACKEND_SERVICE_URL } from '../config/app.config'
import axios from 'axios'
import { Form, Input, Button, Spin, notification } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import _get from 'lodash/get'
import _forEach from 'lodash/forEach'
import _isEmpty from 'lodash/isEmpty'
import _isNil from 'lodash/isNil'
import classnames from 'classnames'
import Head from 'next/head'

const debug = require('debug')('lhft-gui:pages/settings')

const Settings = () => {
  const [config, setConfig] = useState()
  const [loading, setLoading] = useState(false)

  const getRemoteConfig = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.request({
        method: 'GET',
        url: `${BACKEND_SERVICE_URL}/config`
      })
      const remoteConfig = _get(response, 'data.config')
      debug('getRemoteConfig()', { remoteConfig })
      setConfig(remoteConfig)
      setLoading(false)
    } catch (error) {
      const errorData = _get(error, 'response.data')
      notification['error']({
        message: `Error (${errorData.status})`,
        description: errorData.message
      })
      setLoading(false)
    }
  }, [])

  const setRemoteConfig = useCallback(async values => {
    debug('setRemoteConfig()', { values })
    try {
      setLoading(true)
      const response = await axios.request({
        method: 'POST',
        url: `${BACKEND_SERVICE_URL}/config`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: values
      })
      if (response.data.status === 200) {
        notification['success']({
          message: 'Success',
          description: 'Configuration set successfully!'
        })
      }
      setLoading(false)
    } catch (error) {
      const errorData = _get(error, 'response.data')
      notification['error']({
        message: `Error (${errorData.status})`,
        description: errorData.message
      })
      setLoading(false)
    }
  }, [])

  const onFinish = values => {
    debug('onFinish()', { values })
    setRemoteConfig(values)
  };

  const onFinishFailed = errorInfo => {
    debug('onFinishFailed()', { errorInfo })
    const errorFields = _get(errorInfo, 'errorFields')
    if (!_isNil(errorFields) && !_isEmpty(errorFields)) {
      notification['error']({
        message: 'Error',
        description: _get(errorFields[0], 'errors[0]')
      })
    }
  }

  useEffect(() => {
    getRemoteConfig()

    return () => {}
  }, [])

  return (
    <>
      <Head>
        <title>LHFT GUI Settings</title>
      </Head>
      <div className={classnames({
        'd--flex flex-x--center': _isNil(config)
      })}>
        <Spin spinning={loading}>
        {config &&
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={config}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Update Frequency Milliseconds"
              name="update_frequency_milliseconds"
              rules={[{ required: true, message: 'The field `Update Frequency Milliseconds` is required' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        } 
        </Spin>
      </div>
    </>
  )
}

export default Settings
