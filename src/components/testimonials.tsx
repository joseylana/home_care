import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'The care team gave Mum the confidence to stay in the home she loves. We feel supported every step of the way.',
    name: 'Amaka O.',
    role: 'Daughter of a client',
    initials: 'AO',
    accent: 'bg-[#e5f4f1] text-[#006d6f]',
  },
  {
    quote: 'Every visit is thoughtful and personal. It is a relief knowing Dad has genuine companionship during the week.',
    name: 'David M.',
    role: 'Family member',
    initials: 'DM',
    accent: 'bg-[#fff0e7] text-[#b7673c]',
  },
  {
    quote: 'Scheduling care is simple, communication is clear, and the whole team treats our family with real respect.',
    name: 'Grace T.',
    role: 'Client',
    initials: 'GT',
    accent: 'bg-[#edf0fa] text-[#52639a]',
  },
];

const Testimonials = () => {
  return (
    <section className='bg-white px-6 py-20 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col gap-5 border-b border-[#e7e0db] pb-10 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-xl text-left'>
            <span className='nav-item text-[10px] tracking-[0.2em] text-[#006d6f]'>FAMILIES FEEL THE DIFFERENCE</span>
            <h2 className='body-font mt-3 text-4xl font-bold leading-tight text-[#1d2d2d] md:text-5xl'>Testimonials</h2>
          </div>
          <div className='max-w-md text-left'>
            <p className='body-font text-base leading-7 text-[#647171]'>
              The best measure of our work is how families feel after we walk through the door: calmer, connected, and cared for.
            </p>
            <div className='mt-4 flex items-center gap-3'>
              <div className='flex gap-1 text-[#e8a83e]' aria-label='5 out of 5 stars'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} size={13} aria-hidden='true' />
                ))}
              </div>
              <span className='body-font text-sm text-[#647171]'>4.9 average family rating</span>
            </div>
          </div>
        </div>

        <div className='mt-10 grid gap-5 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`flex min-h-[300px] flex-col rounded-2xl border p-7 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(0,109,111,0.1)] ${index === 0 ? 'border-[#a9d4cf] bg-[#f5fbfa]' : 'border-[#e7e0db] bg-[#fdfcfb]'}`}
            >
              <FaQuoteLeft className='text-[#a9d4cf]' size={22} aria-hidden='true' />
              <p className='body-font mt-7 text-lg leading-8 text-[#314242]'>“{testimonial.quote}”</p>
              <div className='mt-auto flex items-center gap-3 border-t border-[#e7e0db] pt-6'>
                <div className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${testimonial.accent}`} aria-hidden='true'>
                  {testimonial.initials}
                </div>
                <div>
                  <p className='body-font text-sm font-bold text-[#1d2d2d]'>{testimonial.name}</p>
                  <p className='body-font mt-1 text-xs text-[#647171]'>{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-8 flex flex-col gap-4 rounded-2xl bg-[#006d6f] px-6 py-5 text-left text-white sm:flex-row sm:items-center sm:justify-between sm:px-8'>
          <p className='body-font text-sm leading-6 sm:text-base'>A trusted extra pair of hands for the moments that matter.</p>
          <a href='#signup' className='nav-item inline-flex items-center text-[10px] tracking-[0.16em] text-[#bde7df] transition-colors hover:text-white'>
            START A CONVERSATION <span className='ml-2' aria-hidden='true'>-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials
