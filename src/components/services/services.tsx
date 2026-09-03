import { FaHandsHelping, FaHeartbeat, FaHome, FaUserNurse } from 'react-icons/fa';

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

const Services = () => {
  return (
    <section className='bg-white px-6 py-20 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col gap-5 border-b border-[#e7e0db] pb-10 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-xl text-left'>
            <span className='nav-item text-[10px] tracking-[0.2em] text-[#006d6f]'>WHAT WE OFFER</span>
            <h2 className='body-font mt-3 text-4xl font-bold text-[#1d2d2d] md:text-5xl'>Care shaped around your life.</h2>
          </div>
          <p className='body-font max-w-md text-left text-base leading-7 text-[#647171]'>
            From a helping hand at home to steady daily companionship, our care plans meet each family where they are.
          </p>
        </div>

        <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className='group flex aspect-square flex-col items-center justify-center rounded-full border border-[#e7e0db] bg-[#fdfcfb] p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#a9d4cf] hover:shadow-[0_16px_35px_rgba(0,109,111,0.1)]'>
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${service.accent}`}>
                  <Icon size={21} aria-hidden='true' />
                </div>
                <h3 className='body-font mt-7 text-xl font-bold text-[#1d2d2d]'>{service.title}</h3>
                <p className='body-font mt-3 text-sm leading-6 text-[#647171]'>{service.description}</p>
                <a href='#' className='nav-item mt-5 text-[10px] tracking-[0.16em] text-[#006d6f] transition-colors group-hover:text-[#3dbca8]'>
                  EXPLORE SERVICE <span aria-hidden='true'>-&gt;</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
