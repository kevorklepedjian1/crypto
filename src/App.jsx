import { Layout, Space, Typography } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Exchanages, Homepage, CryptoDetails, Cryptocurrencies, News } from './components'; // Fix typo here
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/exchanges' element={<Exchanages />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/crypto/:coinID' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} /> {/* Updated to lowercase */}
            </Routes>
          </div>
        </Layout>

        <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2024
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
      
    </div>
  );
}

export default App;
