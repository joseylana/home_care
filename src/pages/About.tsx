import { FaHeart, FaStar, FaUsers, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-[#f9f6f2]'>
      <Navbar />

      {/* Hero Section */}
      <section className='bg-[#f5fbfa] px-6 py-16 lg:px-10 lg:py-24'>
        <div className='mx-auto max-w-7xl text-center'>
          <span className='body-font inline-flex rounded-full border border-[#cfe8e6] bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#006d6f]'>
            ABOUT US
          </span>
          <h1 className='body-font mt-6 text-5xl leading-tight text-[#1d2d2d] md:text-6xl'>
            Compassionate care, every day
          </h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d5d5d]'>
            Care Connect is transforming how families access and manage professional home care services.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className='bg-white px-6 py-20 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div>
              <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f4f1] text-[#006d6f]'>
                <FaHeart size={24} aria-hidden='true' />
              </div>
              <h2 className='body-font mt-6 text-3xl font-bold text-[#1d2d2d]'>Our Mission</h2>
              <p className='body-font mt-4 text-base leading-7 text-[#647171]'>
                To provide compassionate, reliable, and accessible home care services that empower families and caregivers. We believe that quality care should be simple to arrange, transparent in pricing, and centered on the needs of each individual.
              </p>
              <p className='body-font mt-4 text-base leading-7 text-[#647171]'>
                Our platform connects vetted professional caregivers with families seeking trusted support, making care management efficient and stress-free.
              </p>
            </div>

            <div>
              <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f4f1] text-[#006d6f]'>
                <FaStar size={24} aria-hidden='true' />
              </div>
              <h2 className='body-font mt-6 text-3xl font-bold text-[#1d2d2d]'>Our Vision</h2>
              <p className='body-font mt-4 text-base leading-7 text-[#647171]'>
                A world where every person has access to affordable, quality care that allows them to age or recover safely at home, surrounded by family and community.
              </p>
              <p className='body-font mt-4 text-base leading-7 text-[#647171]'>
                We envision a care ecosystem where technology bridges the gap between families and caregivers, creating transparency, trust, and peace of mind for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='bg-[#f9f6f2] px-6 py-20 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='body-font text-4xl font-bold leading-tight text-[#1d2d2d] md:text-5xl'>
              Our Core Values
            </h2>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {[
              { icon: FaHeart, title: 'Compassion', desc: 'We approach every interaction with empathy and genuine care.' },
              { icon: FaCheckCircle, title: 'Reliability', desc: 'Our caregivers and platform are dependable, day and night.' },
              { icon: FaUsers, title: 'Community', desc: 'We build strong relationships and support networks.' },
              { icon: FaStar, title: 'Excellence', desc: 'We maintain the highest standards of professionalism.' },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className='rounded-2xl border border-[#e7e0db] bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#a9d4cf] hover:shadow-[0_16px_35px_rgba(0,109,111,0.1)]'
                >
                  <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-[#e5f4f1] text-[#006d6f] mx-auto'>
                    <Icon size={28} aria-hidden='true' />
                  </div>
                  <h3 className='body-font mt-6 text-xl font-bold text-[#1d2d2d]'>{value.title}</h3>
                  <p className='body-font mt-3 text-sm leading-6 text-[#647171]'>{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='bg-white px-6 py-20 lg:px-10'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='body-font text-4xl font-bold leading-tight text-[#1d2d2d] md:text-5xl'>
            Our Story
          </h2>
          <div className='mt-10 space-y-6 text-left text-base leading-7 text-[#647171]'>
            <p className='body-font'>
              Care Connect was founded with a simple insight: finding and managing quality home care should not be complicated or stressful. Our founders, drawn from healthcare, technology, and social care backgrounds, recognized a critical gap in how families access care services.
            </p>
            <p className='body-font'>
              What started as a conversation among family members caring for aging parents has grown into a platform serving hundreds of families across the region. Every feature we build, every caregiver we onboard, and every update we make is driven by real feedback from families and caregivers.
            </p>
            <p className='body-font'>
              Today, Care Connect is committed to simplifying care management through technology, transparency, and human connection. We're not just a platform—we're partners in your care journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='bg-[#006d6f] px-6 py-16 text-white lg:px-10 lg:py-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              { number: '500+', label: 'Families Served' },
              { number: '300+', label: 'Professional Caregivers' },
              { number: '25K+', label: 'Care Hours Delivered' },
              { number: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className='text-center'>
                <p className='text-4xl font-bold md:text-5xl'>{stat.number}</p>
                <p className='body-font mt-2 text-[#d8efec]'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='bg-[#f9f6f2] px-6 py-20 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='body-font text-4xl font-bold leading-tight text-[#1d2d2d] md:text-5xl'>
              Meet Our Team
            </h2>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-[#4d5d5d]'>
              Dedicated professionals committed to transforming care delivery.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {[
              {
                name: 'Amara Okafor',
                role: 'Founder & CEO',
                bio: 'Healthcare professional with 15+ years experience in home care services.',
              },
              {
                name: 'Chidinma Eze',
                role: 'Head of Care Operations',
                bio: 'Nursing specialist ensuring the highest standards of caregiver training.',
              },
              {
                name: 'David Cole',
                role: 'Head of Technology',
                bio: 'Tech innovator building platforms that simplify complex problems.',
              },
            ].map((member, index) => (
              <div key={index} className='rounded-2xl border border-[#e7e0db] bg-white p-8 text-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#e5f4f1] text-2xl font-bold text-[#006d6f] mx-auto'>
                  {member.name.charAt(0)}
                </div>
                <h3 className='body-font mt-6 text-xl font-bold text-[#1d2d2d]'>{member.name}</h3>
                <p className='nav-item mt-2 text-[10px] tracking-[0.2em] text-[#006d6f]'>{member.role}</p>
                <p className='body-font mt-4 text-sm leading-6 text-[#647171]'>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-white px-6 py-16 text-center lg:px-10 lg:py-20'>
        <div className='mx-auto max-w-3xl'>
          <h2 className='body-font text-4xl font-bold leading-tight text-[#1d2d2d] md:text-5xl'>
            Join the Care Connect community
          </h2>
          <p className='mt-6 text-lg leading-8 text-[#4d5d5d]'>
            Whether you're seeking care or want to make a difference as a caregiver, we'd love to have you on board.
          </p>
          <a
            href='#signup'
            className='mt-8 inline-block rounded-md bg-[#006d6f] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3dbca8]'
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
