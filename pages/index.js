import { ELEMENTS_PER_PAGE, MAX_ELEMENTS } from '../config/app.config'
import { InputNumber, Table } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import _forEach from 'lodash/forEach'
import _isEmpty from 'lodash/isEmpty'
import _isNil from 'lodash/isNil'
import Head from 'next/head'
import theme from '../styles/theme'

const debug = require('debug')('lhft-gui:pages/index')

const Index = () => {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: ELEMENTS_PER_PAGE
  })

  const findIndexBySymbol = (dataArray, symbol) => dataArray.findIndex(d => d.symbol === symbol)

  const updateData = useCallback(dataArray => {
    if (Array.isArray(dataArray)) {
      setData(prevData => {
        const mergedData = [...prevData]
        _forEach(dataArray, dataElement => {
          const index = findIndexBySymbol(mergedData, dataElement.symbol)
          if (index >= 0) {
            mergedData[index].price = dataElement.price
          } else {
            if (mergedData.length >= MAX_ELEMENTS) {
              mergedData.shift()
            }
            mergedData.push(dataElement)
          }
        })

        return mergedData
      })
    }
  }, [])

  const onThresoldChanged = (element, value) => {
    setData(prevData => {
      const updatedData = [...prevData]
      const index = findIndexBySymbol(updatedData, element.symbol)
      if (index >= 0) {
        updatedData[index].thresold = value
      }

      return updatedData
    })
  }

  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      width: '50%'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '25%',
      render: (text, element) => {
        const delta = !(_isNil(element.thresold) && _isEmpty(element.thresold)) ? element.price - element.thresold : 0
        const { colors } = theme
        return {
          props: {
            style: Object.assign({},
              delta !== 0 && { backgroundColor: delta > 0 ? colors.green : colors.red },
              delta !== 0 && { color: colors.white }
            )
          },
          children: <div>{text}</div>
        }
      }
    },
    {
      title: 'Threshold',
      dataIndex: 'threshold',
      width: '25%',
      // eslint-disable-next-line react/display-name
      render: (text, element) => <InputNumber onChange={value => onThresoldChanged(element, value)} />
    }
  ]

  useEffect(() => {
    const events = new EventSource('https://lhft-backend.herokuapp.com/subscribe')
    events.onmessage = event => {
      const dataArray = JSON.parse(event.data)
      updateData(dataArray)
    }

    return () => {
      events.close()
    }
  }, [updateData])

  const onChange = (pagination, filters, sorter, extra) => {
    debug('onChange()', { pagination, filters, sorter, extra })
    setPagination(pagination)
  }

  return (
    <>
      <Head>
        <title>LHFT GUI</title>
      </Head>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          rowKey={element => `key${element.symbol}`}
          size="small"
          pagination={pagination}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default Index
