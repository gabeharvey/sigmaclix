import About from './About.jsx';
import Stock from './Stock.jsx'; 
import SocialMedia from './SocialMedia.jsx';
import Contact from './Contact.jsx';

const MainLayout = () => {
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
