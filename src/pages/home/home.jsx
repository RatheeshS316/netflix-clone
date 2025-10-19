import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/banner/banner';
 import Titlecard from '../../components/titlecard/titlecard';
 import Footer from '../../components/footer/footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div title='Popular Movies'>
      <Titlecard />
      </div>
      <Footer />
     </div>
  );
};

export default Home;
