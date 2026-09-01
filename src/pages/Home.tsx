import Navbar from '../components/navbar/navbar';
import HeroSection from '../components/hero_Section/heroSection';

const Home = () => {
  return (
    <div className='min-h-screen bg-[#f9f6f2]'>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
