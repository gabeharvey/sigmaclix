import { useEffect } from 'react';
import Stock from './Stock.jsx'; 
import Cards from './Cards.jsx';
import Comics from './Comics.jsx';
import VintageGames from './VintageGames.jsx';
import Toys from './Toys.jsx';


const MainLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>     
        <Stock /> 
        <Cards />
        <Comics />
        <VintageGames />
        <Toys />
    </>
  );
};

export default MainLayout;
