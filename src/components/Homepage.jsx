import React from 'react'
import millify from 'millify'
import { Typography, Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/CryptoApi'

const {Title} = Typography

const Homepage = () => {
const {data, isFetching} = useGetCryptosQuery() 

console.log(data)

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title ="Total CryptoCurrencies" value="5"/></Col>
        <Col span={12}><Statistic title ="Total Exchanges" value="5"/></Col>
        <Col span={12}><Statistic title ="Total Market Cap" value="5"/></Col>
        <Col span={12}><Statistic title ="Total 24h Volume" value="5"/></Col>
        <Col span={12}><Statistic title ="Total Markets" value="5"/></Col>
        </Row>   
    </>
  )
}

export default Homepage