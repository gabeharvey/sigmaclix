import { useEffect } from 'react';
import About from './About.jsx';
import Stock from './Stock.jsx'; 
import SocialMedia from './SocialMedia.jsx';
import Cards from './Cards.jsx';
import Comics from './Comics.jsx';
import VintageGames from './VintageGames.jsx';
import Toys from './Toys.jsx';
import Contact from './Contact.jsx';


const MainLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>   
        <About />  
        <Stock /> 
        <SocialMedia />
        <Cards />
        <Comics />
        <VintageGames />
        <Toys />
        <Contact />
    </>
  );
};

export default MainLayout;
