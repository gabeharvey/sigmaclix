import { useEffect } from 'react';
import Cards from './Cards.jsx';
import Comics from './Comics.jsx';
import Stock from './Stock.jsx'; 

const MainLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>     
        <Stock /> 
        <Cards />
        <Comics />
    </>
  );
};

export default MainLayout;
