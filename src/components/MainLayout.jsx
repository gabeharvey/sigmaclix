import { useEffect } from 'react';
import Stock from './Stock.jsx'; 

const MainLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
      <Stock /> 
    </>
  );
};

export default MainLayout;
