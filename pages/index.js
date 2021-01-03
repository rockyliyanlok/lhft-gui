import { ELEMENTS_PER_PAGE, MAX_ELEMENTS } from '../config/app.config'
import React, { useCallback, useEffect, useState } from 'react'
import _forEach from 'lodash/forEach'
import Head from 'next/head'
import { Table } from 'antd'

const debug = require('debug')('lhft-gui:pages/index')

const Index = () => {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: ELEMENTS_PER_PAGE
  })

  const updateData = useCallback(dataArray => {
    const findIndexBySymbol = (dataArray, symbol) => dataArray.findIndex(d => d.symbol === symbol)
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

  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      width: '50%'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '50%'
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
