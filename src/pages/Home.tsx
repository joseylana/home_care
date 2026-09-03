import Navbar from '../components/navbar/navbar';
import HeroSection from '../components/hero_Section/heroSection';
import Services from '../components/services/services';
import Works from '../components/howItWorks/works';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className='min-h-screen bg-[#f9f6f2]'>
      <Navbar />
      <HeroSection />
      <Services />
      <Works />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
