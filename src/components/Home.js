import React from 'react';
import HeaderMain from './main/HeaderMain';
import Chart from './main/Chart';
import NewsMain from './main/NewsMain';
import AboutMain from './main/AboutMain';
import PortfolioMain from './main/PortfolioMain';

const Home = () => (
  <div>
    <HeaderMain />
    <Chart />
    <NewsMain />
    <AboutMain />
    <PortfolioMain />
  </div>
);

export default Home;
