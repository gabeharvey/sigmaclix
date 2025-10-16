import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from './About';
import Stock from './Stock';
import SocialMedia from './SocialMedia';
import Contact from './Contact';

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <div id="about"><About /></div>
      <div id="stock"><Stock /></div>
      <div id="social"><SocialMedia /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

export default MainLayout;
