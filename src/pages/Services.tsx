import { FaHandsHelping, FaHeartbeat, FaHome, FaUserNurse } from 'react-icons/fa';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

const services = [
  {
    title: 'Personal care',
    description: 'Respectful support with everyday routines, hygiene, mobility, and medication reminders.',
    icon: FaUserNurse,
    accent: 'bg-[#e5f4f1] text-[#006d6f]',
  },
  {
    title: 'Companion care',
    description: 'Warm companionship, conversation, and meaningful activities that make each day brighter.',
    icon: FaHandsHelping,
    accent: 'bg-[#fff0e7] text-[#b7673c]',
  },
  {
    title: 'Home support',
    description: 'Practical help around the home, from light housekeeping to meal preparation and errands.',
    icon: FaHome,
    accent: 'bg-[#edf0fa] text-[#52639a]',
  },
  {
    title: 'Wellness checks',
    description: 'Consistent check-ins that help families stay informed, reassured, and connected to care.',
    icon: FaHeartbeat,
    accent: 'bg-[#f9e9ef] text-[#a54f72]',
  },
];

const ServicesPage = () => {
  return (
    <div className='min-h-screen bg-[#f9f6f2]'>
      <Navbar />
      
      {/* Hero Section */}
      <section className='bg-[#f5fbfa] px-6 py-16 lg:px-10 lg:py-24'>
        <div className='mx-auto max-w-7xl text-center'>
          <span className='body-font inline-flex rounded-full border border-[#cfe8e6] bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#006d6f]'>
            COMPREHENSIVE CARE SERVICES
          </span>
          <h1 className='body-font mt-6 text-5xl leading-tight text-[#1d2d2d] md:text-6xl'>
            Care tailored to your needs
          </h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d5d5d]'>
            From personal care to companionship, we offer a full range of services designed to support you and your loved ones at every stage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='bg-white px-6 py-20 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 grid gap-8 md:grid-cols-2'>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className='rounded-2xl border border-[#e7e0db] bg-[#fdfcfb] p-8 text-left transition duration-300 hover:-translate-y-1 hover:border-[#a9d4cf] hover:shadow-[0_16px_35px_rgba(0,109,111,0.1)]'
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.accent}`}>
                    <Icon size={28} aria-hidden='true' />
                  </div>
                  <h3 className='body-font mt-6 text-2xl font-bold text-[#1d2d2d]'>{service.title}</h3>
                  <p className='body-font mt-4 text-base leading-7 text-[#647171]'>{service.description}</p>
                  <a href='#signup' className='nav-item mt-6 inline-flex items-center text-[10px] tracking-[0.16em] text-[#006d6f] transition-colors hover:text-[#3dbca8]'>
                    LEARN MORE <span aria-hidden='true' className='ml-2'>→</span>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className='bg-[#f9f6f2] px-6 py-20 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='body-font text-4xl font-bold leading-tight text-[#1d2d2d] md:text-5xl'>
              Why choose Care Connect?
            </h2>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-[#4d5d5d]'>
              We combine trained caregivers, clear communication, and flexible scheduling for peace of mind.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-3'>
            {[
              { title: 'Vetted Professionals', desc: 'All caregivers are carefully screened and trained in compassionate care.' },
              { title: '24/7 Support', desc: 'Get help when you need it with our round-the-clock support system.' },
              { title: 'Flexible Scheduling', desc: 'Services tailored to your schedule, whether daily or occasional visits.' },
              { title: 'Family Communication', desc: 'Stay informed with regular updates on care progress and wellness.' },
              { title: 'Affordable Pricing', desc: 'Transparent rates with no hidden fees or long-term contracts.' },
              { title: 'Personalized Plans', desc: 'Custom care plans designed specifically for your loved one\'s needs.' },
            ].map((item, index) => (
              <div key={index} className='rounded-2xl border border-[#e7e0db] bg-white p-6 text-left'>
                <h3 className='body-font text-lg font-bold text-[#1d2d2d]'>{item.title}</h3>
                <p className='body-font mt-3 text-sm leading-6 text-[#647171]'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-[#006d6f] px-6 py-16 text-center text-white lg:px-10 lg:py-20'>
        <div className='mx-auto max-w-3xl'>
          <h2 className='body-font text-4xl font-bold leading-tight md:text-5xl'>
            Ready to get started?
          </h2>
          <p className='mt-6 text-lg leading-8 text-[#d8efec]'>
            Contact us today to schedule a consultation and discover which services are right for you.
          </p>
          <a
            href='#signup'
            className='mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-medium text-[#006d6f] transition-colors hover:bg-[#f9f6f2]'
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
