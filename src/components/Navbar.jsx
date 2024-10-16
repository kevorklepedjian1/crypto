import React from 'react';
import { Button, Avatar, Typography, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const menuItems = [
    { label: <Link to="/">Home</Link>, key: 'home', icon: <HomeOutlined /> },
    { label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>, key: 'cryptocurrencies', icon: <FundOutlined /> },
    { label: <Link to="/exchanges">Exchanges</Link>, key: 'exchanges', icon: <MoneyCollectOutlined /> },
    { label: <Link to="/news">News</Link>, key: 'news', icon: <BulbOutlined /> },
  ];

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark' items={menuItems} />
    </div>
  );
};

export default Navbar;
