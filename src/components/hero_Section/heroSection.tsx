import heroImage from '../../assets/care_giver.jpg';

const stats = [
  { label: 'Caregivers', value: '250+' },
  { label: 'Families served', value: '4.8k' },
  { label: 'Average rating', value: '4.9/5' },
];

const HeroSection = () => {
  return (
    <section className='bg-[#f5fbfa]'>
      <div className='mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-20'>
        <div className='text-left'>
          <span className='body-font inline-flex rounded-full border border-[#cfe8e6] bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#006d6f]'>
            TRUSTED HOME CARE SUPPORT
          </span>

          <h1 className='body-font mt-6 text-5xl leading-tight text-[#1d2d2d] md:text-6xl'>
            Care that feels like family.
          </h1>

          <p className='mt-5 max-w-xl text-lg leading-8 text-[#4d5d5d]'>
            Compassionate support for seniors and families who want safe, reliable,
            and dignified care at home.
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <button className='body-font rounded-md bg-[#006d6f] px-6 py-3 text-sm text-white transition-colors hover:bg-[#3dbca8]'>
              Book a visit
            </button>
            <button className='body-font rounded-md border border-[#006d6f] bg-white px-6 py-3 text-sm text-[#006d6f] transition-colors hover:bg-[#ecf7f5]'>
              Learn more
            </button>
          </div>

          <div className='mt-10 flex flex-wrap gap-8'>
            {stats.map((item) => (
              <div key={item.label}>
                <p className='body-font text-3xl text-[#006d6f]'>{item.value}</p>
                <p className='body-font mt-1 text-[10px] tracking-[0.18em] text-[#4d5d5d]'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative'>
          <div className='absolute -left-6 top-8 h-28 w-28 rounded-full bg-[#cfe8e6] blur-2xl' />
          <div className='absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-[#f4d9c6] blur-2xl' />

          <div className='relative overflow-hidden rounded-[32px] border border-[#dfeae8] bg-white p-3 shadow-[0_20px_60px_rgba(0,109,111,0.12)]'>
            <img
              src={heroImage}
              alt='Caregiver assisting a senior at home'
              className='h-[480px] w-full rounded-[24px] object-cover'
            />
          </div>

          <div className='absolute -bottom-4 left-6 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-[#e6eceb]'>
            <p className='nav-item text-[10px] tracking-[0.18em] text-[#4d5d5d]'>
              24/7 support
            </p>
            <p className='mt-2 text-2xl font-bold text-[#006d6f]'>1-Click help</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
