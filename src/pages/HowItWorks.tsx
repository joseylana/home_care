import { FaCalendarCheck } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { MdManageAccounts, MdSupervisorAccount } from 'react-icons/md';
import careImage from '../assets/supporting.jpg';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

const steps = [
  {
    number: '01',
    title: 'Create an account',
    description: 'Sign up and choose your role (Admin, Family Member, or Caregiver).',
    icon: MdSupervisorAccount,
  },
  {
    number: '02',
    title: 'Add clients and caregivers',
    description: 'Add the people you want to care for and the team members supporting them.',
    icon: IoMdAdd,
  },
  {
    number: '03',
    title: 'Schedule and plan',
    description: 'Create a personalized care schedule that works for your family.',
    icon: FaCalendarCheck,
  },
  {
    number: '04',
    title: 'Track and manage',
    description: 'Monitor care progress and manage your schedule in real-time.',
    icon: MdManageAccounts,
  },
];

const HowItWorksPage = () => {
  return (
    <div className='min-h-screen bg-[#f9f6f2]'>
      <Navbar />

      {/* Hero Section */}
      <section className='bg-[#f5fbfa] px-6 py-16 lg:px-10 lg:py-24'>
        <div className='mx-auto max-w-7xl text-center'>
          <span className='body-font inline-flex rounded-full border border-[#cfe8e6] bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#006d6f]'>
            GETTING STARTED
          </span>
          <h1 className='body-font mt-6 text-5xl leading-tight text-[#1d2d2d] md:text-6xl'>
            Four simple steps to care
          </h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d5d5d]'>
            From account creation to managing daily care, our platform makes it easy to get started with professional care support.
          </p>
        </div>
      </section>

      {/* Main How It Works Section */}
      <section className='border-y border-[#dfeae8] bg-white px-6 py-20 lg:px-10'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch'>
          <div className='overflow-hidden rounded-[28px] border border-[#dfeae8] bg-[#e5f4f1] p-3 shadow-[0_18px_45px_rgba(0,109,111,0.12)]'>
            <img
              src={careImage}
              alt='Caregiver spending time with a client at home'
              className='h-full min-h-[520px] w-full rounded-[20px] object-cover object-center'
            />
          </div>

          <div>
            <div className='mb-10 max-w-xl text-left'>
              <span className='nav-item inline-flex rounded-full bg-[#dff1ee] px-3 py-1 text-[10px] tracking-[0.2em] text-[#006d6f]'>
                THE PROCESS
              </span>
              <h2 className='body-font mt-5 text-4xl font-bold leading-tight text-[#1d2d2d] md:text-5xl'>
                Getting started is simple
              </h2>
              <p className='body-font mt-4 text-base leading-7 text-[#647171]'>
                Getting dependable care at home should feel clear, personal, and reassuring from the very first conversation.
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className='group flex min-h-[220px] flex-col rounded-2xl border border-[#e7e0db] bg-[#fdfcfb] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#a9d4cf] hover:shadow-[0_14px_30px_rgba(0,109,111,0.1)]'
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f4f1] text-[#006d6f] transition-colors group-hover:bg-[#006d6f] group-hover:text-white'>
                        <Icon size={20} aria-hidden='true' />
                      </div>
                      <span className='nav-item text-xs tracking-[0.2em] text-[#a9d4cf]'>{step.number}</span>
                    </div>
                    <h3 className='body-font mt-8 text-xl font-bold text-[#1d2d2d]'>{step.title}</h3>
                    <p className='body-font mt-3 text-sm leading-6 text-[#647171]'>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className='bg-[#f9f6f2] px-6 py-20 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <h2 className='body-font text-4xl font-bold leading-tight text-[#1d2d2d] md:text-5xl'>
              Everything you need in one place
            </h2>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                title: 'Real-time scheduling',
                desc: 'Coordinate visits seamlessly with your care team and family members.',
              },
              {
                title: 'Secure communication',
                desc: 'Share updates and messages with all stakeholders in one secure platform.',
              },
              {
                title: 'Care documentation',
                desc: 'Track and document care activities, health observations, and progress.',
              },
              {
                title: 'Caregiver management',
                desc: 'Manage your care team, assignments, and availability effortlessly.',
              },
              {
                title: 'Report generation',
                desc: 'Generate comprehensive reports on care quality and outcomes.',
              },
              {
                title: '24/7 support',
                desc: 'Access dedicated support whenever you have questions or need help.',
              },
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
            Start managing care today
          </h2>
          <p className='mt-6 text-lg leading-8 text-[#d8efec]'>
            Join families and caregivers who are simplifying their care management with Care Connect.
          </p>
          <a
            href='#signup'
            className='mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-medium text-[#006d6f] transition-colors hover:bg-[#f9f6f2]'
          >
            Create Your Account
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
